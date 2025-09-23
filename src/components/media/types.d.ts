import type {MediaHTMLAttributes, VideoHTMLAttributes} from "react";

export interface MediaProps extends MediaHTMLAttributes<HTMLMediaElement> {

}

export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  unsupportedLabel?: string;
  events?: Record<string, (e) => void>
  extensions: string[];
}