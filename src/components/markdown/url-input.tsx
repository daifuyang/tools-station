"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Link2 } from "lucide-react";

interface UrlInputProps {
  onLoad: (content: string) => void;
}

export function UrlInput({ onLoad }: UrlInputProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch content");
      }
      const text = await response.text();
      onLoad(text);
    } catch (err) {
      setError("无法加载内容，请检查URL是否有效");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="url"
        placeholder="输入 Markdown 链接..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" disabled={loading}>
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Link2 className="h-4 w-4" />}
        加载
      </Button>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </form>
  );
}