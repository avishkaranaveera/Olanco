import {
  CupboardIllustration,
  DoorIllustration,
  HandrailIllustration,
  JoineryIllustration,
  WindowIllustration,
} from '@/components/illustrations/WoodIllustrations';

export const illustrationBySlug = {
  door: DoorIllustration,
  window: WindowIllustration,
  handrail: HandrailIllustration,
  cupboard: CupboardIllustration,
  joinery: JoineryIllustration,
} as const;
