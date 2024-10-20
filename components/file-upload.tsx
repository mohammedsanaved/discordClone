"use client";

import { useState } from "react";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { X } from "lucide-react";
import Image from "next/image";
import "@uploadthing/react/styles.css";

interface UploadFileProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "serverImage" | "messageFile";
}

export const FileUpload = ({ onChange, value, endpoint }: UploadFileProps) => {
  const [preview, setPreview] = useState<string | null>(value || null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRemove = () => {
    setPreview(null);
    onChange(undefined);
  };

  const fileType = preview?.split(".").pop();

  // if (isLoading) {
  //   return (
  //     <div className='relative h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center'>
  //       <span className='text-sm text-gray-500'>Loading...</span>
  //     </div>
  //   );
  // }

  if (preview && fileType !== "pdf") {
    return (
      <div className='relative h-20 w-20'>
        <Image
          fill
          src={preview}
          alt='Uploaded file'
          className='rounded-full object-cover'
        />
        <button
          onClick={handleRemove}
          className='absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full'
          type='button'>
          <X className='h-4 w-4' />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onUploadBegin={() => {
        setIsLoading(true);
        console.log("Upload started...");
      }}
      onClientUploadComplete={(res) => {
        console.log(res, "Upload complete response");

        setIsLoading(false); // Make sure to reset loading state
        if (res && res.length > 0) {
          const uploadedFileUrl = res[0].url; // Use the first file's URL
          setPreview(uploadedFileUrl); // Set the preview URL
          onChange(uploadedFileUrl); // Update the parent state
        } else {
          console.error("No file URL found in response");
        }
      }}
      onUploadError={(error: Error) => {
        setIsLoading(false); // Reset loading state on error
        console.error("Upload error:", error);
        alert(`Upload failed: ${error.message}`);
      }}
    />
  );
};
