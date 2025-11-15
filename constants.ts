
import type { Layer } from './types';
import {
  CpuChipIcon,
  CubeTransparentIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CircleStackIcon,
  BeakerIcon,
  RectangleGroupIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon
} from './components/icons';


export const architectureData: Layer[] = [
  {
    id: 'layer-1',
    title: 'LAYER 1: PHYSICAL TWIN',
    subtitle: 'Siemens PCS7 DCS Platform & Sensor Suite',
    components: [
      {
        title: 'PCS7 Hardware Stack',
        icon: CpuChipIcon,
        items: [
          'SIMATIC S7-400H Redundant CPU',
          'FailSafe for SIL2 safety integrity',
          'Hot-standby failover capability',
          'WinCC Runtime Professional v14+'
        ],
      },
      {
        title: 'I/O & Data Acquisition',
        icon: CircleStackIcon,
        items: [
          '25-35 physical sensors',
          '1-5 Hz sampling rate',
          '16+ AI channels (16-bit, 0.1% accuracy)',
          '64+ DI/DO channels'
        ],
      },
      {
        title: 'Data Preprocessing Pipeline',
        icon: BeakerIcon,
        items: [
            'Raw Sensor Data -> Range Check',
            'Outlier Detection (3-sigma rule)',
            'Signal Smoothing (t=10 sec filter)',
            'Timestamped Data Package to SIMIT'
        ]
      }
    ],
    connector: {
      label: 'PROFIBUS DP / PROFINET IO',
      details: 'Real-time I/O to Simulation Layer',
    },
  },
  {
    id: 'layer-2',
    title: 'LAYER 2: INTEGRATION & SIMULATION',
    subtitle: 'Siemens SIMIT Platform',
    components: [
      {
        title: 'SIMIT Core Components',
        icon: CubeTransparentIcon,
        items: [
          'SIMIT Virtual Controller (S7-PLCSIM)',
          'Real-time Simulation Engine',
          'Physics-based models (FMU/FMI)',
          'gPROMS support for advanced models',
        ],
      },
      {
        title: 'SIMIT UNIT & Training',
        icon: WrenchScrewdriverIcon,
        items: [
            'Operator Training Simulator',
            '25+ Scenarios for competency',
            'Software-in-the-loop & Hardware-in-the-loop',
            'Safe training environment',
        ]
      },
      {
        title: 'Communication Interfaces',
        icon: CommandLineIcon,
        items: [
          'PROFIBUS DP, PROFINET IO',
          'OPC UA, Shared Memory',
          'PRODAVE (MPI/Industrial Ethernet)',
          'End-to-end latency: 2-4 seconds'
        ]
      }
    ],
    connector: {
      label: 'OPC UA / Shared Memory',
      details: '2-4 sec latency, TLS 1.3 encrypted',
    },
  },
  {
    id: 'layer-3',
    title: 'LAYER 3: ANALYTICS & INTELLIGENCE',
    subtitle: 'Predictive Maintenance Engine',
    components: [
      {
        title: 'Anomaly Detection',
        icon: ChartBarIcon,
        items: [
          'Isolation Forest algorithm',
          'Autoencoder (3-layer neural network)',
          'Statistical thresholds',
          'SHAP explainability for transparency'
        ],
      },
      {
        title: 'RUL & Physics Model',
        icon: BeakerIcon,
        items: [
          'Remaining Useful Life (RUL) Prediction',
          '3-layer MLP Neural Network (85%+ accuracy)',
          'Physics Model Validation (FMU models)',
          '0-8760 hrs forecast horizon',
        ],
      },
       {
        title: 'Expert System Validation',
        icon: ShieldCheckIcon,
        items: [
            'Bearing degradation rules (90% confidence)',
            'Impeller erosion/fouling (80% confidence)',
            'Inlet filter fouling (75% confidence)'
        ]
      }
    ],
    connector: {
      label: 'REST API / MQTT',
      details: 'Pub-sub messaging & API for predictions',
    },
  },
  {
    id: 'layer-4',
    title: 'LAYER 4: PRESENTATION & CONTROL',
    subtitle: 'Web Dashboard & Mobile Applications',
    components: [
      {
        title: 'Web Dashboard (React.js)',
        icon: RectangleGroupIcon,
        items: [
          'Real-time HMI',
          'KPI display & Trend analysis',
          'Alert dashboard & Status monitoring',
          'Control views for operators'
        ],
      },
      {
        title: 'Mobile Applications (React Native)',
        icon: WrenchScrewdriverIcon,
        items: [
          'iOS/Android alerts',
          'On-the-go alert viewing',
          'Key status monitoring',
          'Push notifications for critical events'
        ],
      },
      {
        title: 'SCADA Integration',
        icon: CpuChipIcon,
        items: [
          'WinCC SCADA Runtime',
          'Alarm management integration',
          'Historical trending views',
          'Seamless operator experience'
        ],
      },
    ],
  },
  {
    id: 'deployment',
    title: 'DEPLOYMENT & NETWORK ARCHITECTURE',
    subtitle: 'Microservices on Kubernetes & Secure Networking',
    components: [
        {
            title: 'Kubernetes Microservices',
            icon: CpuChipIcon,
            items: [
                'HA Cluster (3 Master, 3+ Worker Nodes)',
                'OPC UA Client, SIMIT Connector Pods',
                'Analytics Engine (Python), REST API (FastAPI)',
                'MQTT Broker, TimescaleDB, Web Frontend (Nginx)',
            ]
        },
        {
            title: 'Network Security',
            icon: ShieldCheckIcon,
            items: [
                'OT/IT Network Segmentation via DMZ',
                'TLS 1.3 Encryption for all OPC UA',
                'X.509 Certificates for mutual auth',
                'IDS/IPS on DMZ, VPN for remote access',
            ]
        }
    ]
  }
];
