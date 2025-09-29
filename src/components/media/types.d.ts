import type {
  AudioHTMLAttributes,
  IframeHTMLAttributes,
  ImgHTMLAttributes,
  VideoHTMLAttributes
} from "react";

export type MediaProps =
  | { type: 'video'; props: VideoProps }
  | { type: 'audio'; props: AudioProps }
  | { type: 'image'; props: ImageProps }
  | { type: 'document'; props: DocumentProps };

interface AudioAndVideoBaseProps {
  unsupportedLabel?: string;
  events?: Record<string, (e: any) => void>
  extensions: string[];
}

export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement>,
  AudioAndVideoBaseProps {
}

export interface AudioProps extends AudioHTMLAttributes<HTMLAudioElement>,
  AudioAndVideoBaseProps {
}

interface AVPlayerProps extends VideoProps, AudioProps {
  data: Record<string, string>[];
  mimes: Record<string, string>;
  label?: any;
  type: number;
}

export interface DocumentProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  typeFile: string;
}

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
}