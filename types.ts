
import type React from 'react';

export interface Component {
  title: string;
  items: string[];
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ConnectorInfo {
  label: string;
  details: string;
}

export interface Layer {
  id: string;
  title: string;
  subtitle: string;
  components: Component[];
  connector?: ConnectorInfo;
}
