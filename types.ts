
import type React from 'react';

export type SlideComponent = React.ComponentType;

export interface Presentation {
  id: string;
  name: string;
  description: string;
  slides: SlideComponent[];
  thumbnail: string;
}

