"use client";

import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface FileUploadProps {
  onLoad: (content: string) => void;
}

export function FileUpload({ onLoad }: FileUploadProps) {
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        onLoad(content);
      };
      reader.readAsText(file);
    },
    [onLoad]
  );

  return (
    <div className="flex items-center gap-2">
      <label className="flex-1">
        <input
          type="file"
          accept=".md,.markdown,.txt"
          onChange={handleFileChange}
          className="hidden"
        />
        <Button asChild className="w-full cursor-pointer">
          <span>
            <Upload className="h-4 w-4 mr-2" />
            上传本地文件
          </span>
        </Button>
      </label>
      <span className="text-sm text-muted-foreground">.md, .markdown, .txt</span>
    </div>
  );
}