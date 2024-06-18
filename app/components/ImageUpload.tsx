import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = (result: any) => {
    onChange(result.info.secure_url);
  };
  return (
    <CldUploadWidget
      onSuccess={handleUpload}
      uploadPreset="ml_default"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative flex cursor-pointer items-center justify-center gap-4 border-2 border-dashed border-neutral-300 p-20 text-neutral-600 transition hover:opacity-70"
          >
            <TbPhotoPlus size={50} />
            <div className="text-lg font-semibold">Click to Upload</div>
            {value && (
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={value}
                  alt="Uploaded Image "
                  className="object-cover"
                  fill
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
