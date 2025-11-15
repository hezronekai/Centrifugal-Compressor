import React from 'react';
import {
  SensorIcon,
  SimitIcon,
  AnalyticsIcon,
  PresentationIcon,
  ArrowRightIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CircleStackIcon,
  CloudIcon,
  ServerIcon,
  DatabaseIcon,
  ArrowLeftRightIcon,
  RectangleGroupIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
} from './components/icons';

// Reusable component for a block in the diagram
const DiagramBlock: React.FC<{
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  items?: string[];
  children?: React.ReactNode;
}> = ({ title, icon: Icon, color, items, children }) => (
  <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-4 flex flex-col items-center text-center shadow-md min-w-[150px] min-h-[120px] justify-center">
    <Icon className={`w-8 h-8 mb-2 ${color}`} />
    <h3 className={`font-bold text-sm ${color}`}>{title}</h3>
    {items && (
      <ul className="text-xs text-slate-400 mt-2 list-none text-center space-y-1">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )}
    {children}
  </div>
);

// Reusable component for an arrow connector
const ConnectorArrow: React.FC<{ label: string; direction?: 'right' | 'left-right' }> = ({ label, direction = 'right' }) => (
  <div className="flex flex-col items-center justify-center mx-2 text-center my-4 md:my-0">
    <p className="text-xs font-semibold text-sky-300 mb-1">{label}</p>
    {direction === 'right' ? (
      <ArrowRightIcon className="w-12 h-12 text-slate-500" />
    ) : (
      <ArrowLeftRightIcon className="w-12 h-12 text-slate-500" />
    )}
  </div>
);


export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans antialiased">
      <div className="container mx-auto p-4 sm:p-8">
        {/* FIRST ARCHITECTURE DIAGRAM */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
            Industrial Automation Architecture
          </h1>
          <p className="text-lg text-slate-400 mt-2">Predictive Maintenance Digital Twin for Centrifugal Gas Compressors</p>
        </header>

        <main className="w-full flex flex-col lg:flex-row bg-slate-800/30 border border-slate-700 rounded-xl p-4 sm:p-6 lg:p-8 gap-4">
          
          {/* OT Network Zone */}
          <div className="flex-1 p-4 border-2 border-dashed border-cyan-500/30 rounded-lg">
            <h2 className="text-xl font-bold text-cyan-400 text-center mb-6">OT Network (Process Control)</h2>
            <div className="flex flex-col items-center gap-6">
                <DiagramBlock title="Centrifugal Compressor" icon={WrenchScrewdriverIcon} color="text-slate-300" items={['Physical Asset']} />
                
                <div className='flex items-center'>
                    <DiagramBlock title="Sensor Suite" icon={SensorIcon} color="text-cyan-400" items={['25-35 Sensors', 'PT, TT, FT, VT']} />
                    <ConnectorArrow label="Raw Data" />
                    <DiagramBlock title="I/O Modules" icon={CircleStackIcon} color="text-cyan-400" items={['1-5 Hz Sampling']} />
                </div>

                <div className="w-px h-6 bg-slate-600"></div>

                <div className="relative flex flex-col items-center gap-6 p-4 border border-slate-600 rounded-lg">
                    <span className="absolute -top-3 bg-slate-800 px-2 text-xs text-slate-400">DCS</span>
                    <DiagramBlock title="Siemens PCS7 DCS" icon={CpuChipIcon} color="text-cyan-400" items={['S7-400H Redundant CPU']} />
                    <div className="flex items-center">
                        <DiagramBlock title="WinCC SCADA HMI" icon={RectangleGroupIcon} color="text-indigo-400" />
                        <ConnectorArrow label="HIL" direction="left-right" />
                        <DiagramBlock title="SIMIT Simulation" icon={SimitIcon} color="text-emerald-400" items={['Digital Twin Core']} />
                    </div>
                </div>
            </div>
          </div>

          {/* DMZ Zone */}
          <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-amber-500/30 rounded-lg lg:w-48">
             <h2 className="text-xl font-bold text-amber-400 text-center mb-6">DMZ</h2>
             <DiagramBlock title="OPC UA Gateway" icon={ShieldCheckIcon} color="text-amber-400" items={['TLS 1.3 Encrypted']} />
             <p className="text-xs text-slate-500 text-center mt-2">Secure OT/IT Bridge</p>
          </div>

          {/* IT Network Zone */}
          <div className="flex-1 p-4 border-2 border-dashed border-indigo-500/30 rounded-lg">
            <h2 className="text-xl font-bold text-indigo-400 text-center mb-6">IT Network (Analytics &amp; Enterprise)</h2>
            <div className="flex flex-col items-center gap-6">

                <div className="w-full p-4 border border-slate-600 rounded-lg bg-slate-900/30">
                    <div className="flex items-center justify-center mb-4">
                        <CloudIcon className="w-8 h-8 text-rose-400 mr-2" />
                        <h3 className="font-bold text-rose-400 text-center">Kubernetes Microservices Cluster</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <DiagramBlock title="OPC UA Client" icon={ServerIcon} color="text-slate-300" />
                        <DiagramBlock title="Analytics Engine" icon={AnalyticsIcon} color="text-amber-400" />
                        <DiagramBlock title="TimescaleDB" icon={DatabaseIcon} color="text-slate-300" />
                        <DiagramBlock title="MQTT Broker" icon={ServerIcon} color="text-slate-300" />
                        <DiagramBlock title="REST API" icon={ServerIcon} color="text-slate-300" />
                        <DiagramBlock title="Web Frontend" icon={ServerIcon} color="text-slate-300" />
                    </div>
                </div>
                
                <div className="w-px h-6 bg-slate-600"></div>

                <div className="flex items-center gap-4">
                     <DiagramBlock title="Web Dashboard" icon={PresentationIcon} color="text-indigo-400" items={['React.js']} />
                     <DiagramBlock title="Mobile Apps" icon={WrenchScrewdriverIcon} color="text-indigo-400" items={['React Native']} />
                </div>
            </div>
          </div>
        </main>
        
        {/* Separator */}
        <div className="my-16 border-t-2 border-slate-700/50"></div>
        
        {/* SECOND ARCHITECTURE DIAGRAM (INTEGRATED) */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
            Integrated Co-simulation Architecture
          </h1>
          <p className="text-lg text-slate-400 mt-2">Featuring Honeywell UniSim Design & Siemens SIMIT Integration</p>
        </header>
        
        <main className="w-full flex flex-col lg:flex-row bg-slate-800/30 border border-slate-700 rounded-xl p-4 sm:p-6 lg:p-8 gap-4">
          
          {/* OT Network Zone - Integrated */}
          <div className="flex-1 p-4 border-2 border-dashed border-cyan-500/30 rounded-lg">
            <h2 className="text-xl font-bold text-cyan-400 text-center mb-6">OT Network (Integrated Simulation)</h2>
            <div className="flex flex-col items-center gap-6">
                <DiagramBlock title="Centrifugal Compressor" icon={WrenchScrewdriverIcon} color="text-slate-300" items={['Physical Asset']} />
                
                <div className='flex items-center'>
                    <DiagramBlock title="Sensor Suite" icon={SensorIcon} color="text-cyan-400" items={['25-35 Sensors']} />
                    <ConnectorArrow label="Physical I/O" />
                    <DiagramBlock title="I/O Modules" icon={CircleStackIcon} color="text-cyan-400" items={['Real-time Data']} />
                </div>
                
                <div className="w-px h-6 bg-slate-600"></div>

                <div className="relative flex flex-col items-center gap-2 p-4 border border-slate-600 rounded-lg w-full">
                    <span className="absolute -top-3 bg-slate-800 px-2 text-xs text-slate-400">Co-simulation Environment</span>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
                        <DiagramBlock title="Honeywell UniSim" icon={BeakerIcon} color="text-emerald-400" items={['Process Simulation']} />
                        <ConnectorArrow label="FMU/FMI" direction="left-right" />
                        <DiagramBlock title="SIMIT" icon={SimitIcon} color="text-yellow-400" items={['Integration Engine']} />
                        <ConnectorArrow label="PROFIBUS/PROFINET" direction="left-right" />
                        <DiagramBlock title="Siemens PCS7" icon={CpuChipIcon} color="text-cyan-400" items={['Control Logic']} />
                    </div>
                </div>
            </div>
          </div>
          
          {/* DMZ Zone (Same as above) */}
          <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-amber-500/30 rounded-lg lg:w-48">
             <h2 className="text-xl font-bold text-amber-400 text-center mb-6">DMZ</h2>
             <DiagramBlock title="OPC UA Gateway" icon={ShieldCheckIcon} color="text-amber-400" items={['TLS 1.3 Encrypted']} />
             <p className="text-xs text-slate-500 text-center mt-2">Secure OT/IT Bridge</p>
          </div>

          {/* IT Network Zone (Same as above) */}
          <div className="flex-1 p-4 border-2 border-dashed border-indigo-500/30 rounded-lg">
             <h2 className="text-xl font-bold text-indigo-400 text-center mb-6">IT Network (Analytics &amp; Enterprise)</h2>
            <div className="flex flex-col items-center gap-6">
                <div className="w-full p-4 border border-slate-600 rounded-lg bg-slate-900/30">
                    <div className="flex items-center justify-center mb-4">
                        <CloudIcon className="w-8 h-8 text-rose-400 mr-2" />
                        <h3 className="font-bold text-rose-400 text-center">Kubernetes Microservices Cluster</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <DiagramBlock title="OPC UA Client" icon={ServerIcon} color="text-slate-300" />
                        <DiagramBlock title="Analytics Engine" icon={AnalyticsIcon} color="text-amber-400" />
                        <DiagramBlock title="TimescaleDB" icon={DatabaseIcon} color="text-slate-300" />
                        <DiagramBlock title="MQTT Broker" icon={ServerIcon} color="text-slate-300" />
                        <DiagramBlock title="REST API" icon={ServerIcon} color="text-slate-300" />
                        <DiagramBlock title="Web Frontend" icon={ServerIcon} color="text-slate-300" />
                    </div>
                </div>
                
                <div className="w-px h-6 bg-slate-600"></div>

                <div className="flex items-center gap-4">
                     <DiagramBlock title="Web Dashboard" icon={PresentationIcon} color="text-indigo-400" items={['React.js']} />
                     <DiagramBlock title="Mobile Apps" icon={WrenchScrewdriverIcon} color="text-indigo-400" items={['React Native']} />
                </div>
            </div>
          </div>
        </main>
        
        {/* Legend */}
        <footer className="text-center mt-12 text-slate-400 text-sm">
            <div className="max-w-4xl mx-auto border-t border-slate-700 pt-6">
                <h4 className="font-bold mb-4 text-lg text-slate-200">Data Flow Legend</h4>
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                    <div className="flex items-center gap-2">
                        <ArrowRightIcon className="w-5 h-5 text-slate-500" />
                        <span>Uni-directional Flow</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ArrowLeftRightIcon className="w-5 h-5 text-slate-500" />
                        <span>Bi-directional Flow / Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border-2 border-dashed border-cyan-500/50"></div>
                        <span>OT Network</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border-2 border-dashed border-amber-500/50"></div>
                        <span>DMZ</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border-2 border-dashed border-indigo-500/50"></div>
                        <span>IT Network</span>
                    </div>
                </div>
            </div>
        </footer>

      </div>
    </div>
  );
}
