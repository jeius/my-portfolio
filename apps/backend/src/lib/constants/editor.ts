import {
  HeadingFeature,
  BoldFeature,
  ParagraphFeature,
  AlignFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  FixedToolbarFeature,
  type FeatureProviderServer,
} from '@payloadcms/richtext-lexical'

type FeaturesInput = FeatureProviderServer<any, any, any>[] | FeatureProviderServer<any, any, any>[]

export const DEFAULT_EDITOR_FEATURES: FeaturesInput  = [
  HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
  BoldFeature(),
  ParagraphFeature(),
  AlignFeature(),
  ItalicFeature(),
  UnderlineFeature(),
  StrikethroughFeature(),
  FixedToolbarFeature({ applyToFocusedEditor: true }),
]
