import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Eye, 
  Sun, 
  Moon, 
  Layers, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Sparkles,
  Building2,
  Info,
  ShieldCheck,
  Maximize2
} from 'lucide-react';

export interface BuildingMeta {
  id: string;
  name: string;
  category: string;
  architecture: string;
  dressPolicy: 'Strict Formals' | 'Moderate / Smart Casuals' | 'High Freedom / Casuals';
  dressRuleDetail: string;
  capacity: string;
  departments: string[];
  description: string;
  color: number;
}

export const CAMPUS_BUILDINGS_META: BuildingMeta[] = [
  {
    id: 'senate-clocktower',
    name: 'Senate Block & Heritage Clock Tower',
    category: 'Administrative & Heritage Core',
    architecture: 'Indo-Saracenic Brick & Roman Colonnade Portico',
    dressPolicy: 'Strict Formals',
    dressRuleDetail: 'Mandatory tucked-in formal shirts, formal shoes, visible institute ID. Morning gate inspection checkpoint.',
    capacity: '3,000 Auditorium Seats · Syndicate Chambers',
    departments: ['Deaneries', 'Registrar Office', 'Autonomous Exam Syndicate', 'Central Convocation Hall'],
    description: 'Monumental 4-tiered clock tower modeled after classic Tamil Nadu collegiate heritage (CEG / Presidency / MCC style) with copper dome spire and grand colonnade pillars.',
    color: 0x3b82f6
  },
  {
    id: 'ai-tech-tower',
    name: 'AI & Supercomputing Glass Spire',
    category: 'R&D Supercomputing Hub',
    architecture: 'Parametric Glass High-Rise with Cyber Mesh & Solar Skin',
    dressPolicy: 'High Freedom / Casuals',
    dressRuleDetail: 'Full casual autonomy: T-shirts, hoodies, and jeans permitted. ESD anti-static footwear provided for server rooms.',
    capacity: '2,400 High-Compute Workstations · 12 R&D Clusters',
    departments: ['Generative AI Labs', 'NVIDIA DGX Cluster Bay', 'Robotics & Autonomous Drones', 'Quantum Computing Sandbox'],
    description: 'Sleek multi-tiered glass spire with glowing neon floor plates, rooftop telecommunications mast, and 24/7 student open innovation incubator.',
    color: 0x06b6d4
  },
  {
    id: 'library-rotunda',
    name: 'Knowledge Central Library Rotunda',
    category: 'Central Research Library & Archives',
    architecture: 'Circular Classical Rotunda with Glass Dome & Mezzanines',
    dressPolicy: 'High Freedom / Casuals',
    dressRuleDetail: 'Casuals, polo t-shirts, kurtis allowed. RFID turnstile at entrance with silent reading discipline.',
    capacity: '1,500 Silent Study Desks · 400,000 Physical Volumes',
    departments: ['IEEE/ACM Digital Archives', 'PhD Research Scholars Wing', 'Media & Rare Manuscript Vault', 'Collaborative Study Pods'],
    description: 'Circular rotunda with translucent central sky dome, outer Doric columns, and multi-level spiral book stacks.',
    color: 0x10b981
  },
  {
    id: 'engineering-hangar',
    name: 'Advanced Engineering & Maker Hangar',
    category: 'Heavy Engineering & Prototyping Labs',
    architecture: 'Industrial Barrel-Vault Hangar with Solar Canopy',
    dressPolicy: 'Moderate / Smart Casuals',
    dressRuleDetail: 'Boiler suits / safety coats and industrial closed leather boots mandatory during machinery operation.',
    capacity: '800 Mechanical / Aero Workstations · 8 Heavy Bays',
    departments: ['Formula Student / Baja Garage', 'Aero Wind Tunnel Bay', 'CNC 5-Axis Machining', 'Electric Vehicle Battery Lab'],
    description: 'Sprawling high-ceiling workshop equipped for hands-on prototyping, race car assembly, and industrial fabrication.',
    color: 0xf59e0b
  },
  {
    id: 'student-hostels',
    name: 'Emerald Residential Halls & Green Quads',
    category: 'Hostels, Dining & Student Living',
    architecture: 'Quadrangle Courtyard with Terraced Balconies & Garden Plazas',
    dressPolicy: 'High Freedom / Casuals',
    dressRuleDetail: 'Full personal comfort: T-shirts, shorts, track pants, casual wear. Student cafeteria & reading rooms.',
    capacity: '3,500 Resident Students · Multi-Cuisine Food Courts',
    departments: ['Student Senate Council', 'Gymnasium & Yoga Halls', 'Music & Cultural Practice Bays', '24/7 Cafeteria'],
    description: 'Twin modern residential pavilions surrounding a central lush courtyard, illuminated walkways, and water fountain.',
    color: 0x8b5cf6
  },
  {
    id: 'sports-stadium',
    name: 'Olympic Sports Arena & Floodlit Complex',
    category: 'Athletics & Physical Education',
    architecture: 'Oval Modern Arena with Tension-Fabric Canopies',
    dressPolicy: 'High Freedom / Casuals',
    dressRuleDetail: 'Athletic wear, tracksuits, sports jerseys, running sneakers permitted freely.',
    capacity: '5,000 Spectator Stands · Olympic Running Track',
    departments: ['Physical Education Directorate', 'Indoor Badminton Courts', 'Sports Physiotherapy Center', 'Floodlit Turf'],
    description: 'State-of-the-art sports stadium with synthetic red running tracks, emerald green grass turf, and floodlight pylons.',
    color: 0xec4899
  }
];

interface Props {
  collegeName?: string;
  initialBuildingId?: string;
  compact?: boolean;
}

export const Campus3DVisualizer: React.FC<Props> = ({
  collegeName = 'Tamil Nadu Premier Campus',
  initialBuildingId,
  compact = false
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [selectedBuildingId, setSelectedBuildingId] = useState<string>(
    initialBuildingId || 'senate-clocktower'
  );
  const [hoveredBuildingId, setHoveredBuildingId] = useState<string | null>(null);
  const [timeOfDay, setTimeOfDay] = useState<'day' | 'sunset' | 'night'>('night');
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [isExploded, setIsExploded] = useState<boolean>(false);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [cameraView, setCameraView] = useState<'aerial' | 'senate' | 'tech' | 'library'>('aerial');

  // Internal Three.js handles
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const buildingMeshesRef = useRef<Map<string, THREE.Group>>(new Map());
  const lightsRef = useRef<{
    ambient: THREE.AmbientLight;
    dir: THREE.DirectionalLight;
    neonPoints: THREE.PointLight[];
  } | null>(null);

  const isDraggingRef = useRef(false);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const sphericalRef = useRef({ radius: 260, phi: Math.PI / 3.4, theta: Math.PI / 4 });
  const targetLookAt = useRef(new THREE.Vector3(0, 15, 0));

  const selectedBuilding = CAMPUS_BUILDINGS_META.find((b) => b.id === selectedBuildingId) || CAMPUS_BUILDINGS_META[0];

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth || 800;
    const height = containerRef.current.clientHeight || (compact ? 380 : 540);

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Background color based on initial theme
    scene.background = new THREE.Color(0x0a0f1d);
    scene.fog = new THREE.FogExp2(0x0a0f1d, 0.0022);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1200);
    cameraRef.current = camera;
    updateCameraPosition();

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x223355, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x99ccff, 2.0);
    dirLight.position.set(120, 200, 80);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 500;
    dirLight.shadow.camera.left = -160;
    dirLight.shadow.camera.right = 160;
    dirLight.shadow.camera.top = 160;
    dirLight.shadow.camera.bottom = -160;
    scene.add(dirLight);

    // Cyan & Purple Neon Accents for night cyber effect
    const pLight1 = new THREE.PointLight(0x06b6d4, 3.5, 180);
    pLight1.position.set(-60, 45, -40);
    scene.add(pLight1);

    const pLight2 = new THREE.PointLight(0x3b82f6, 3.0, 180);
    pLight2.position.set(0, 55, 0);
    scene.add(pLight2);

    const pLight3 = new THREE.PointLight(0x10b981, 2.5, 160);
    pLight3.position.set(70, 35, 40);
    scene.add(pLight3);

    lightsRef.current = {
      ambient: ambientLight,
      dir: dirLight,
      neonPoints: [pLight1, pLight2, pLight3]
    };

    // 5. Ground Plane & Campus Grid
    const groundGeo = new THREE.PlaneGeometry(500, 500, 32, 32);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x070c18,
      roughness: 0.85,
      metalness: 0.2
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    scene.add(ground);

    // Subtle Grid Overlay
    const grid = new THREE.GridHelper(360, 36, 0x1e3a8a, 0x0f172a);
    grid.position.y = 0;
    scene.add(grid);

    // Campus Road & Lawn Paths
    createCampusLandscape(scene);

    // 6. Build the 3D Architectural Buildings
    buildAllCampusStructures(scene, buildingMeshesRef.current);

    // 7. Raycaster for building hover/click
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDraggingRef.current) {
        const deltaX = e.clientX - prevMouseRef.current.x;
        const deltaY = e.clientY - prevMouseRef.current.y;
        prevMouseRef.current = { x: e.clientX, y: e.clientY };

        sphericalRef.current.theta -= deltaX * 0.007;
        sphericalRef.current.phi = Math.max(
          0.15,
          Math.min(Math.PI / 2 - 0.05, sphericalRef.current.phi - deltaY * 0.007)
        );
        updateCameraPosition();
      } else {
        // Raycast check
        raycaster.setFromCamera(mouse, camera);
        const intersectableObjects: THREE.Object3D[] = [];
        buildingMeshesRef.current.forEach((group) => {
          group.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              intersectableObjects.push(child);
            }
          });
        });

        const intersects = raycaster.intersectObjects(intersectableObjects, false);
        if (intersects.length > 0) {
          const hit = intersects[0].object;
          let parentBuildingId: string | null = null;
          buildingMeshesRef.current.forEach((group, id) => {
            if (group.getObjectById(hit.id)) {
              parentBuildingId = id;
            }
          });
          setHoveredBuildingId(parentBuildingId);
          if (canvasRef.current) canvasRef.current.style.cursor = 'pointer';
        } else {
          setHoveredBuildingId(null);
          if (canvasRef.current) canvasRef.current.style.cursor = isDraggingRef.current ? 'grabbing' : 'grab';
        }
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      prevMouseRef.current = { x: e.clientX, y: e.clientY };
      if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
    };

    const handlePointerUp = (e: MouseEvent) => {
      isDraggingRef.current = false;
      if (canvasRef.current) canvasRef.current.style.cursor = 'grab';

      // Click detection if not dragged much
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const objects: THREE.Object3D[] = [];
      buildingMeshesRef.current.forEach((group) => {
        group.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) objects.push(child);
        });
      });

      const hits = raycaster.intersectObjects(objects, false);
      if (hits.length > 0) {
        const topHit = hits[0].object;
        buildingMeshesRef.current.forEach((group, id) => {
          if (group.getObjectById(topHit.id)) {
            setSelectedBuildingId(id);
          }
        });
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      sphericalRef.current.radius = Math.max(
        110,
        Math.min(420, sphericalRef.current.radius + e.deltaY * 0.25)
      );
      updateCameraPosition();
    };

    const canvasElem = canvasRef.current;
    canvasElem.addEventListener('mousemove', handlePointerMove);
    canvasElem.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mouseup', handlePointerUp);
    canvasElem.addEventListener('wheel', handleWheel, { passive: false });

    // 8. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Auto Orbit rotation
      if (isAutoRotate && !isDraggingRef.current) {
        sphericalRef.current.theta += delta * 0.12;
        updateCameraPosition();
      }

      // Animate Beacon and pulse glowing rings
      const beacon = scene.getObjectByName('clockTowerBeacon');
      if (beacon) {
        beacon.position.y = 86 + Math.sin(elapsed * 2.5) * 1.5;
      }

      // Animate fountain water particles if any
      const waterFountain = scene.getObjectByName('fountainWater');
      if (waterFountain) {
        waterFountain.rotation.y += delta * 0.8;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Listener
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || (compact ? 380 : 540);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvasElem.removeEventListener('mousemove', handlePointerMove);
      canvasElem.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mouseup', handlePointerUp);
      canvasElem.removeEventListener('wheel', handleWheel);
      renderer.dispose();
    };
  }, [compact]);

  // Camera updater helper
  const updateCameraPosition = () => {
    if (!cameraRef.current) return;
    const { radius, phi, theta } = sphericalRef.current;
    const x = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.cos(theta);

    cameraRef.current.position.set(x, y, z);
    cameraRef.current.lookAt(targetLookAt.current);
  };

  // React to lighting changes (Day / Sunset / Night)
  useEffect(() => {
    if (!sceneRef.current || !lightsRef.current) return;
    const { ambient, dir, neonPoints } = lightsRef.current;
    const scene = sceneRef.current;

    if (timeOfDay === 'day') {
      scene.background = new THREE.Color(0xdbeafe);
      scene.fog = new THREE.FogExp2(0xdbeafe, 0.0016);
      ambient.color.setHex(0xffffff);
      ambient.intensity = 1.6;
      dir.color.setHex(0xfffaed);
      dir.intensity = 2.4;
      dir.position.set(140, 220, 100);
      neonPoints.forEach((p) => (p.intensity = 0.5));
    } else if (timeOfDay === 'sunset') {
      scene.background = new THREE.Color(0x1e1528);
      scene.fog = new THREE.FogExp2(0x1e1528, 0.0022);
      ambient.color.setHex(0xf97316);
      ambient.intensity = 1.0;
      dir.color.setHex(0xfb923c);
      dir.intensity = 2.0;
      dir.position.set(160, 70, -60);
      neonPoints.forEach((p) => (p.intensity = 2.2));
    } else {
      // Night cyber
      scene.background = new THREE.Color(0x0a0f1d);
      scene.fog = new THREE.FogExp2(0x0a0f1d, 0.0022);
      ambient.color.setHex(0x1e293b);
      ambient.intensity = 0.9;
      dir.color.setHex(0x60a5fa);
      dir.intensity = 1.2;
      dir.position.set(100, 160, 60);
      neonPoints.forEach((p) => (p.intensity = 4.0));
    }
  }, [timeOfDay]);

  // React to wireframe toggle
  useEffect(() => {
    if (!sceneRef.current) return;
    buildingMeshesRef.current.forEach((group) => {
      group.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => ((m as THREE.MeshStandardMaterial).wireframe = isWireframe));
          } else if (mesh.material) {
            (mesh.material as THREE.MeshStandardMaterial).wireframe = isWireframe;
          }
        }
      });
    });
  }, [isWireframe]);

  // React to Exploded View
  useEffect(() => {
    buildingMeshesRef.current.forEach((group, id) => {
      let partIdx = 0;
      group.children.forEach((child) => {
        if (child.name.startsWith('tier-')) {
          partIdx++;
          const origY = child.userData.origY ?? child.position.y;
          child.userData.origY = origY;
          if (isExploded) {
            child.position.y = origY + partIdx * 8;
          } else {
            child.position.y = origY;
          }
        }
      });
    });
  }, [isExploded]);

  // Highlight selected building
  useEffect(() => {
    buildingMeshesRef.current.forEach((group, id) => {
      const isSelected = id === selectedBuildingId;
      const isHovered = id === hoveredBuildingId;

      group.traverse((child) => {
        if (child.name === 'selectionRing') {
          child.visible = isSelected || isHovered;
          (child as THREE.Mesh).scale.setScalar(isSelected ? 1.05 : 1.0);
        }
      });
    });
  }, [selectedBuildingId, hoveredBuildingId]);

  // Preset view jump
  const handlePresetView = (preset: 'aerial' | 'senate' | 'tech' | 'library') => {
    setCameraView(preset);
    setIsAutoRotate(false);

    if (preset === 'aerial') {
      targetLookAt.current.set(0, 15, 0);
      sphericalRef.current = { radius: 260, phi: Math.PI / 3.4, theta: Math.PI / 4 };
    } else if (preset === 'senate') {
      targetLookAt.current.set(0, 35, 0);
      sphericalRef.current = { radius: 150, phi: Math.PI / 2.7, theta: 0.1 };
      setSelectedBuildingId('senate-clocktower');
    } else if (preset === 'tech') {
      targetLookAt.current.set(-70, 45, -50);
      sphericalRef.current = { radius: 160, phi: Math.PI / 2.6, theta: -Math.PI / 3 };
      setSelectedBuildingId('ai-tech-tower');
    } else if (preset === 'library') {
      targetLookAt.current.set(75, 25, 45);
      sphericalRef.current = { radius: 140, phi: Math.PI / 2.8, theta: Math.PI / 2.5 };
      setSelectedBuildingId('library-rotunda');
    }
    updateCameraPosition();
  };

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden border border-slate-700/60 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl flex flex-col ${compact ? 'h-[460px]' : 'h-[640px]'}`}>
      {/* Top Floating Control Bar */}
      <div className="absolute top-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        {/* Campus & Model Title */}
        <div className="pointer-events-auto bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 flex items-center gap-2 shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            3D Structural Model · {collegeName}
          </span>
          <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
            Three.js WebGL Engine
          </span>
        </div>

        {/* View Controls Group */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md p-1 rounded-xl border border-white/10 shadow-lg text-xs">
          {/* Day / Sunset / Night */}
          <button
            onClick={() => setTimeOfDay((prev) => (prev === 'night' ? 'day' : prev === 'day' ? 'sunset' : 'night'))}
            className="px-2.5 py-1 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 font-medium"
            title="Toggle Day/Sunset/Night lighting"
          >
            {timeOfDay === 'night' ? <Moon className="w-3.5 h-3.5 text-indigo-400" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
            <span className="capitalize hidden md:inline">{timeOfDay}</span>
          </button>

          {/* Wireframe */}
          <button
            onClick={() => setIsWireframe(!isWireframe)}
            className={`px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 font-medium ${
              isWireframe ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
            title="Wireframe CAD Inspection"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Wireframe</span>
          </button>

          {/* Exploded View */}
          <button
            onClick={() => setIsExploded(!isExploded)}
            className={`px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 font-medium ${
              isExploded ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
            title="Exploded Floor Tier View"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Exploded</span>
          </button>

          {/* Auto Orbit */}
          <button
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            className={`px-2 py-1 rounded-lg transition-colors ${
              isAutoRotate ? 'text-emerald-400' : 'text-slate-400 hover:text-white'
            }`}
            title="Toggle Camera Orbit"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${isAutoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          </button>
        </div>
      </div>

      {/* Preset Camera Viewpoints Pill */}
      <div className="absolute top-14 left-3 z-20 flex items-center gap-1.5 pointer-events-auto">
        <div className="bg-slate-900/80 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 flex items-center gap-1 text-[11px] font-medium text-slate-300">
          <span className="text-slate-400 mr-1 text-[10px] uppercase tracking-wider">Angle:</span>
          {(['aerial', 'senate', 'tech', 'library'] as const).map((v) => (
            <button
              key={v}
              onClick={() => handlePresetView(v)}
              className={`px-2 py-0.5 rounded text-[11px] capitalize transition-all ${
                cameraView === v
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Canvas Container */}
      <div ref={containerRef} className="relative flex-1 w-full h-full cursor-grab">
        <canvas ref={canvasRef} className="w-full h-full block outline-none" />

        {/* Hover label tooltip */}
        {hoveredBuildingId && hoveredBuildingId !== selectedBuildingId && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-slate-900/90 text-white px-3 py-1 rounded-full text-xs font-semibold border border-sky-400/50 shadow-lg flex items-center gap-1.5 animate-fadeIn">
            <Eye className="w-3.5 h-3.5 text-sky-400" />
            Click to inspect {CAMPUS_BUILDINGS_META.find((b) => b.id === hoveredBuildingId)?.name}
          </div>
        )}
      </div>

      {/* Bottom Architectural Inspector Drawer / Card */}
      <div className="relative z-20 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 sm:p-4 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Building Details */}
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                {selectedBuilding.category}
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-300 font-mono">
                {selectedBuilding.architecture}
              </span>
              <span className="text-xs text-slate-400">·</span>
              {/* Dress Code in this building */}
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 ${
                selectedBuilding.dressPolicy === 'Strict Formals'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  : selectedBuilding.dressPolicy === 'High Freedom / Casuals'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                <ShieldCheck className="w-3 h-3" />
                Zone Policy: {selectedBuilding.dressPolicy}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              {selectedBuilding.name}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
              {selectedBuilding.description}
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-amber-300/90 font-medium">
              <Info className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>Attire Requirement: {selectedBuilding.dressRuleDetail}</span>
            </div>
          </div>

          {/* Quick Building Selector Pills */}
          <div className="flex md:flex-col gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold hidden md:block">
              Switch Zone:
            </span>
            <div className="flex flex-row md:flex-wrap gap-1">
              {CAMPUS_BUILDINGS_META.map((b) => (
                <button
                  key={b.id}
                  onClick={() => {
                    setSelectedBuildingId(b.id);
                    if (b.id === 'senate-clocktower') handlePresetView('senate');
                    else if (b.id === 'ai-tech-tower') handlePresetView('tech');
                    else if (b.id === 'library-rotunda') handlePresetView('library');
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedBuildingId === b.id
                      ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: `#${b.color.toString(16).padStart(6, '0')}` }} />
                  {b.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------------
// Procedural Three.js Campus Architecture Builders
// ----------------------------------------------------------------------------

function createCampusLandscape(scene: THREE.Scene) {
  // Main Central Courtyard Lawn
  const lawnGeo = new THREE.BoxGeometry(280, 0.4, 280);
  const lawnMat = new THREE.MeshStandardMaterial({
    color: 0x064e3b, // Deep emerald turf
    roughness: 0.9,
    metalness: 0.1
  });
  const lawn = new THREE.Mesh(lawnGeo, lawnMat);
  lawn.position.set(0, 0, 0);
  lawn.receiveShadow = true;
  scene.add(lawn);

  // Cross-Axis Walkways (Granite stone paving)
  const walkMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    roughness: 0.6
  });

  const walkNorthSouth = new THREE.Mesh(new THREE.BoxGeometry(16, 0.6, 280), walkMat);
  walkNorthSouth.receiveShadow = true;
  scene.add(walkNorthSouth);

  const walkEastWest = new THREE.Mesh(new THREE.BoxGeometry(280, 0.6, 16), walkMat);
  walkEastWest.receiveShadow = true;
  scene.add(walkEastWest);

  // Central Circular Plaza with Fountain
  const plazaMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    roughness: 0.5
  });
  const centralPlaza = new THREE.Mesh(new THREE.CylinderGeometry(28, 28, 0.8, 32), plazaMat);
  centralPlaza.position.set(0, 0.2, 0);
  scene.add(centralPlaza);

  // Water Fountain Basin
  const fountainBasin = new THREE.Mesh(
    new THREE.CylinderGeometry(14, 15, 2.5, 32),
    new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4 })
  );
  fountainBasin.position.set(0, 1.2, 0);
  scene.add(fountainBasin);

  // Flowing Water disk
  const water = new THREE.Mesh(
    new THREE.CylinderGeometry(12, 12, 2.2, 32),
    new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.8
    })
  );
  water.name = 'fountainWater';
  water.position.set(0, 1.4, 0);
  scene.add(water);

  // Perimeter Trees (Campus Green Canopy)
  const treePositions = [
    [-90, -90], [-60, -90], [-30, -90], [30, -90], [60, -90], [90, -90],
    [-90, 90], [-60, 90], [-30, 90], [30, 90], [60, 90], [90, 90],
    [-90, -60], [-90, -30], [-90, 30], [-90, 60],
    [90, -60], [90, -30], [90, 30], [90, 60],
  ];

  const trunkGeo = new THREE.CylinderGeometry(1.2, 1.6, 8, 8);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.9 });
  const foliageGeo = new THREE.DodecahedronGeometry(5.5);
  const foliageMat = new THREE.MeshStandardMaterial({ color: 0x047857, roughness: 0.8 });

  treePositions.forEach(([x, z]) => {
    const treeGroup = new THREE.Group();
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 4;
    trunk.castShadow = true;
    treeGroup.add(trunk);

    const foliage = new THREE.Mesh(foliageGeo, foliageMat);
    foliage.position.y = 11;
    foliage.castShadow = true;
    treeGroup.add(foliage);

    treeGroup.position.set(x, 0, z);
    scene.add(treeGroup);
  });
}

function buildAllCampusStructures(scene: THREE.Scene, map: Map<string, THREE.Group>) {
  // 1. Senate Block & Heritage Clock Tower (Center Back, Z ~ -35)
  const senateGroup = buildSenateBlock();
  senateGroup.position.set(0, 0, -35);
  scene.add(senateGroup);
  map.set('senate-clocktower', senateGroup);

  // 2. AI & Supercomputing Glass Spire (West, X ~ -85, Z ~ -30)
  const techGroup = buildTechSpire();
  techGroup.position.set(-85, 0, -30);
  scene.add(techGroup);
  map.set('ai-tech-tower', techGroup);

  // 3. Knowledge Central Library Rotunda (East, X ~ 85, Z ~ 20)
  const libraryGroup = buildLibraryRotunda();
  libraryGroup.position.set(85, 0, 20);
  scene.add(libraryGroup);
  map.set('library-rotunda', libraryGroup);

  // 4. Advanced Engineering & Maker Hangar (North-West, X ~ -85, Z ~ 55)
  const hangarGroup = buildMakerHangar();
  hangarGroup.position.set(-85, 0, 55);
  scene.add(hangarGroup);
  map.set('engineering-hangar', hangarGroup);

  // 5. Emerald Residential Halls & Green Quads (South, X ~ 0, Z ~ 85)
  const hostelGroup = buildHostelComplex();
  hostelGroup.position.set(0, 0, 85);
  scene.add(hostelGroup);
  map.set('student-hostels', hostelGroup);

  // 6. Olympic Sports Arena & Stadium (North-East, X ~ 85, Z ~ -60)
  const stadiumGroup = buildSportsStadium();
  stadiumGroup.position.set(85, 0, -60);
  scene.add(stadiumGroup);
  map.set('sports-stadium', stadiumGroup);
}

function addSelectionRing(group: THREE.Group, radius: number) {
  const ringGeo = new THREE.RingGeometry(radius - 1.5, radius + 1.5, 32);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.85
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.5;
  ring.name = 'selectionRing';
  ring.visible = false;
  group.add(ring);
}

// 1. Senate Block Builder
function buildSenateBlock(): THREE.Group {
  const group = new THREE.Group();

  const brickMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.7, metalness: 0.1 });
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.5, metalness: 0.2 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.3, metalness: 0.7 });

  // Tier 1: Main Convocation Wing
  const mainBase = new THREE.Mesh(new THREE.BoxGeometry(64, 22, 38), brickMat);
  mainBase.position.y = 11;
  mainBase.name = 'tier-base';
  mainBase.castShadow = true;
  mainBase.receiveShadow = true;
  group.add(mainBase);

  // Grand Colonnade Pillars on frontal portico
  const pillarGeo = new THREE.CylinderGeometry(1.2, 1.4, 20, 16);
  for (let px = -18; px <= 18; px += 6) {
    const pillar = new THREE.Mesh(pillarGeo, stoneMat);
    pillar.position.set(px, 10, 22);
    pillar.castShadow = true;
    group.add(pillar);
  }

  // Portico Pediment Roof
  const porticoRoof = new THREE.Mesh(new THREE.BoxGeometry(44, 4, 12), stoneMat);
  porticoRoof.position.set(0, 22, 22);
  porticoRoof.castShadow = true;
  group.add(porticoRoof);

  // Tier 2: Mid Tower
  const midTower = new THREE.Mesh(new THREE.BoxGeometry(26, 26, 26), stoneMat);
  midTower.position.y = 35;
  midTower.name = 'tier-mid';
  midTower.castShadow = true;
  group.add(midTower);

  // Clock faces on 4 sides
  const clockGeo = new THREE.CylinderGeometry(5.5, 5.5, 27, 24);
  const clockMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const clockFaceZ = new THREE.Mesh(clockGeo, clockMat);
  clockFaceZ.rotation.x = Math.PI / 2;
  clockFaceZ.position.y = 36;
  group.add(clockFaceZ);

  // Tier 3: Clock Chamber Top
  const topChamber = new THREE.Mesh(new THREE.BoxGeometry(18, 16, 18), brickMat);
  topChamber.position.y = 56;
  topChamber.name = 'tier-top';
  topChamber.castShadow = true;
  group.add(topChamber);

  // Tier 4: Golden Heritage Spire Dome
  const dome = new THREE.Mesh(new THREE.ConeGeometry(9, 20, 16), goldMat);
  dome.position.y = 74;
  dome.name = 'tier-spire';
  dome.castShadow = true;
  group.add(dome);

  // Top Beacon Light Orb
  const beacon = new THREE.Mesh(
    new THREE.SphereGeometry(2.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x60a5fa })
  );
  beacon.position.y = 86;
  beacon.name = 'clockTowerBeacon';
  group.add(beacon);

  addSelectionRing(group, 42);
  return group;
}

// 2. AI Tech Spire Builder
function buildTechSpire(): THREE.Group {
  const group = new THREE.Group();

  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x0891b2,
    roughness: 0.15,
    metalness: 0.85,
    transparent: true,
    opacity: 0.85
  });
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x0e7490, roughness: 0.4, metalness: 0.6 });
  const neonMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });

  // Tier 1 Base Podium
  const podium = new THREE.Mesh(new THREE.BoxGeometry(48, 16, 44), frameMat);
  podium.position.y = 8;
  podium.name = 'tier-podium';
  podium.castShadow = true;
  group.add(podium);

  // Tier 2 Middle Tower
  const towerMid = new THREE.Mesh(new THREE.BoxGeometry(36, 42, 32), glassMat);
  towerMid.position.y = 37;
  towerMid.name = 'tier-glass1';
  towerMid.castShadow = true;
  group.add(towerMid);

  // Luminous Edge Rings
  const ring1 = new THREE.Mesh(new THREE.BoxGeometry(37, 1.5, 33), neonMat);
  ring1.position.y = 30;
  group.add(ring1);

  const ring2 = new THREE.Mesh(new THREE.BoxGeometry(37, 1.5, 33), neonMat);
  ring2.position.y = 50;
  group.add(ring2);

  // Tier 3 High Skyscraper Spire
  const upperSpire = new THREE.Mesh(new THREE.BoxGeometry(24, 38, 22), glassMat);
  upperSpire.position.y = 77;
  upperSpire.name = 'tier-glass2';
  upperSpire.castShadow = true;
  group.add(upperSpire);

  // Rooftop Satellite Radar Dish & Communications Mast
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.2, 28, 8), frameMat);
  mast.position.y = 110;
  mast.name = 'tier-mast';
  group.add(mast);

  const radarDish = new THREE.Mesh(new THREE.ConeGeometry(5, 4, 16), frameMat);
  radarDish.rotation.z = Math.PI / 4;
  radarDish.position.set(4, 98, 0);
  group.add(radarDish);

  addSelectionRing(group, 36);
  return group;
}

// 3. Knowledge Central Library Rotunda Builder
function buildLibraryRotunda(): THREE.Group {
  const group = new THREE.Group();

  const marbleMat = new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.6, metalness: 0.1 });
  const trimMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3, metalness: 0.3 });
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x6ee7b7,
    roughness: 0.1,
    metalness: 0.8,
    transparent: true,
    opacity: 0.75
  });

  // Base circular plinth
  const plinth = new THREE.Mesh(new THREE.CylinderGeometry(34, 36, 6, 32), trimMat);
  plinth.position.y = 3;
  plinth.name = 'tier-plinth';
  plinth.castShadow = true;
  group.add(plinth);

  // Main Cylinder Rotunda Wall
  const rotunda = new THREE.Mesh(new THREE.CylinderGeometry(28, 28, 28, 32), marbleMat);
  rotunda.position.y = 20;
  rotunda.name = 'tier-rotunda';
  rotunda.castShadow = true;
  group.add(rotunda);

  // Colonnade Pillars surrounding rotunda
  const colGeo = new THREE.CylinderGeometry(1.0, 1.0, 26, 12);
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    const col = new THREE.Mesh(colGeo, trimMat);
    col.position.set(Math.cos(angle) * 31, 19, Math.sin(angle) * 31);
    col.castShadow = true;
    group.add(col);
  }

  // Grand Glass Sky Dome
  const dome = new THREE.Mesh(new THREE.SphereGeometry(18, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), glassMat);
  dome.position.y = 34;
  dome.name = 'tier-dome';
  dome.castShadow = true;
  group.add(dome);

  // Dome Finial Needle
  const needle = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 1.2, 12, 8), trimMat);
  needle.position.y = 56;
  group.add(needle);

  addSelectionRing(group, 42);
  return group;
}

// 4. Maker Hangar Builder
function buildMakerHangar(): THREE.Group {
  const group = new THREE.Group();

  const metalMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.6, metalness: 0.5 });
  const solarMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.2, metalness: 0.8 });

  // Main Hangar Hall
  const mainHall = new THREE.Mesh(new THREE.BoxGeometry(46, 20, 36), metalMat);
  mainHall.position.y = 10;
  mainHall.name = 'tier-hangar';
  mainHall.castShadow = true;
  group.add(mainHall);

  // Arched Barrel Roof
  const roof = new THREE.Mesh(new THREE.CylinderGeometry(18, 18, 46, 16, 1, false, 0, Math.PI), solarMat);
  roof.rotation.z = Math.PI / 2;
  roof.position.set(0, 20, 0);
  roof.castShadow = true;
  group.add(roof);

  // Front Workshop Roller Gate (Sliding garage doors)
  const gateMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.7 });
  const gate = new THREE.Mesh(new THREE.BoxGeometry(20, 14, 1), gateMat);
  gate.position.set(0, 7, 18.2);
  group.add(gate);

  addSelectionRing(group, 34);
  return group;
}

// 5. Hostels Builder
function buildHostelComplex(): THREE.Group {
  const group = new THREE.Group();

  const wallMat = new THREE.MeshStandardMaterial({ color: 0x6b21a8, roughness: 0.7, metalness: 0.2 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.5 });

  // West Hostel Wing
  const wingA = new THREE.Mesh(new THREE.BoxGeometry(18, 24, 46), wallMat);
  wingA.position.set(-22, 12, 0);
  wingA.name = 'tier-hostelA';
  wingA.castShadow = true;
  group.add(wingA);

  // East Hostel Wing
  const wingB = new THREE.Mesh(new THREE.BoxGeometry(18, 24, 46), wallMat);
  wingB.position.set(22, 12, 0);
  wingB.name = 'tier-hostelB';
  wingB.castShadow = true;
  group.add(wingB);

  // Connecting Corridor Bridge
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(26, 8, 12), roofMat);
  bridge.position.set(0, 18, -12);
  bridge.castShadow = true;
  group.add(bridge);

  addSelectionRing(group, 42);
  return group;
}

// 6. Sports Stadium Builder
function buildSportsStadium(): THREE.Group {
  const group = new THREE.Group();

  const turfMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 });
  const trackMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.7 });
  const standsMat = new THREE.MeshStandardMaterial({ color: 0x831843, roughness: 0.5 });

  // Outer Oval Athletic Running Track
  const track = new THREE.Mesh(new THREE.CylinderGeometry(34, 35, 1.2, 32), trackMat);
  track.position.y = 0.6;
  track.name = 'tier-track';
  group.add(track);

  // Inner Grass Field
  const field = new THREE.Mesh(new THREE.CylinderGeometry(24, 24, 1.4, 32), turfMat);
  field.position.y = 0.7;
  field.name = 'tier-field';
  group.add(field);

  // Stepped Spectator Stands
  const stands = new THREE.Mesh(new THREE.TorusGeometry(32, 4.5, 12, 32), standsMat);
  stands.rotation.x = Math.PI / 2;
  stands.position.y = 4;
  stands.name = 'tier-stands';
  stands.castShadow = true;
  group.add(stands);

  // 4 Floodlight Pylons
  const pylonGeo = new THREE.CylinderGeometry(0.8, 1.2, 28, 8);
  const pylonMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.8 });
  const lightOrb = new THREE.MeshBasicMaterial({ color: 0xfef08a });

  [[-30, -25], [30, -25], [-30, 25], [30, 25]].forEach(([px, pz]) => {
    const pylon = new THREE.Mesh(pylonGeo, pylonMat);
    pylon.position.set(px, 14, pz);
    group.add(pylon);

    const orb = new THREE.Mesh(new THREE.SphereGeometry(2.5, 8, 8), lightOrb);
    orb.position.set(px, 28, pz);
    group.add(orb);
  });

  addSelectionRing(group, 44);
  return group;
}
