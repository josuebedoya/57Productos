import type {AudioHTMLAttributes, MediaHTMLAttributes, VideoHTMLAttributes} from "react";

export interface MediaProps extends MediaHTMLAttributes<HTMLMediaElement> {

}

interface AudioAndVideoBaseProps {
  unsupportedLabel?: string;
  events?: Record<string, (e) => void>
  extensions: string[];
}

export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement>,
  AudioAndVideoBaseProps {}

export interface AudioProps extends AudioHTMLAttributes<HTMLAudioElement>,
  AudioAndVideoBaseProps {}