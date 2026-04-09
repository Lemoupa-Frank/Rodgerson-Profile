"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Mic, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface VoiceNotePlayerProps {
  title: string;
  description: string;
  audioUrl: string;
}

// Static waveform pattern - completely deterministic, no randomization
const WAVEFORM_HEIGHTS: readonly number[] = [
  47, 68, 42, 80, 55, 72, 38, 85, 60, 45,
  78, 35, 65, 50, 82, 40, 70, 58, 75, 48,
  62, 88, 44, 73, 52, 67, 36, 83, 56, 46,
  76, 42, 69, 54, 79, 38, 64, 50, 71, 45,
] as const;

export function VoiceNotePlayer({ title, description, audioUrl }: VoiceNotePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Audio file not available - placeholder mode
      });
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="border border-accent/30 bg-gradient-to-r from-accent/5 to-primary/5 shadow-md overflow-hidden">
      <CardContent className="p-4 lg:p-6">
        <div className="flex items-start gap-4">
          {/* Play Button */}
          <Button
            onClick={togglePlay}
            size="icon"
            className="w-14 h-14 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shrink-0 shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </Button>

          <div className="flex-1 min-w-0">
            {/* Title and Icon */}
            <div className="flex items-center gap-2 mb-1">
              <Mic className="w-4 h-4 text-accent" />
              <h4 className="font-semibold text-foreground text-sm lg:text-base truncate">
                {title}
              </h4>
            </div>

            {/* Description */}
            <p className="text-xs lg:text-sm text-muted-foreground mb-3 line-clamp-2">
              {description}
            </p>

            {/* Waveform Visualization - Static bars */}
            <div className="relative h-10 flex items-center gap-[2px] overflow-hidden rounded-md bg-muted/50 px-2">
              {WAVEFORM_HEIGHTS.map((barHeight, index) => {
                const barProgress = (index / WAVEFORM_HEIGHTS.length) * 100;
                const isActive = barProgress <= progress;
                return (
                  <div
                    key={index}
                    className={`w-1 rounded-full transition-colors duration-150 ${
                      isActive ? "bg-accent" : "bg-muted-foreground/30"
                    }`}
                    style={{ height: `${barHeight}%` }}
                  />
                );
              })}
              
              {/* Progress overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent pointer-events-none"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Time */}
            <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Volume2 className="w-3 h-3" />
                {formatTime(currentTime)}
              </span>
              <span className="text-accent text-xs italic">
                {duration > 0 ? formatTime(duration) : "Voice note available soon"}
              </span>
            </div>
          </div>
        </div>

        {/* Hidden Audio Element */}
        <audio ref={audioRef} src={audioUrl} preload="metadata" />
      </CardContent>
    </Card>
  );
}
