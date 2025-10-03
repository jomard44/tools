import { useState, useRef } from "react";
import CopyButton from "../components/CopyButton";

export default function ImageResizer() {
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [resizedImage, setResizedImage] = useState(null);
  const [error, setError] = useState("");
  const originalSizeRef = useRef({ width: 0, height: 0 });
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        originalSizeRef.current = {
          width: img.width,
          height: img.height,
        };
        setWidth(img.width);
        setHeight(img.height);
        setImage(img);
        setError("");
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleWidthChange = (e) => {
    const newWidth = parseInt(e.target.value) || "";
    setWidth(newWidth);
    if (maintainAspectRatio && newWidth && originalSizeRef.current.width) {
      const ratio =
        originalSizeRef.current.height / originalSizeRef.current.width;
      setHeight(Math.round(newWidth * ratio));
    }
  };

  const handleHeightChange = (e) => {
    const newHeight = parseInt(e.target.value) || "";
    setHeight(newHeight);
    if (maintainAspectRatio && newHeight && originalSizeRef.current.height) {
      const ratio =
        originalSizeRef.current.width / originalSizeRef.current.height;
      setWidth(Math.round(newHeight * ratio));
    }
  };

  const resizeImage = () => {
    if (!image || !width || !height) {
      setError("Please provide both width and height");
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    // Use better quality scaling
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(image, 0, 0, width, height);

    try {
      const resized = canvas.toDataURL("image/png");
      setResizedImage(resized);
      setError("");
    } catch (err) {
      setError("Error resizing image");
      console.error(err);
    }
  };

  const downloadImage = () => {
    if (!resizedImage) return;

    const link = document.createElement("a");
    link.download = "resized-image.png";
    link.href = resizedImage;
    link.click();
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Image Resizer</h1>
        <p className="text-gray-600">
          Resize your images while maintaining quality.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full"
            />
          </div>

          {image && (
            <>
              <div className="flex items-center gap-4">
                <div className="space-y-2 flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Width (px)
                  </label>
                  <input
                    type="number"
                    value={width}
                    onChange={handleWidthChange}
                    min="1"
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div className="space-y-2 flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Height (px)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={handleHeightChange}
                    min="1"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="aspectRatio"
                  checked={maintainAspectRatio}
                  onChange={(e) => setMaintainAspectRatio(e.target.checked)}
                  className="rounded text-blue-600"
                />
                <label htmlFor="aspectRatio" className="text-sm text-gray-700">
                  Maintain aspect ratio
                </label>
              </div>

              <button
                onClick={resizeImage}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Resize Image
              </button>
            </>
          )}
        </div>

        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-md">{error}</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {image && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-700">
                Original Image
              </h3>
              <div className="border rounded-md p-2">
                <img
                  src={image.src}
                  alt="Original"
                  className="max-w-full h-auto"
                />
                <div className="text-sm text-gray-500 mt-2">
                  Original size: {originalSizeRef.current.width} ×{" "}
                  {originalSizeRef.current.height}
                </div>
              </div>
            </div>
          )}

          {resizedImage && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-700">
                Resized Image
              </h3>
              <div className="border rounded-md p-2">
                <img
                  src={resizedImage}
                  alt="Resized"
                  className="max-w-full h-auto"
                />
                <div className="text-sm text-gray-500 mt-2">
                  New size: {width} × {height}
                </div>
                <button
                  onClick={downloadImage}
                  className="mt-2 w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Download Resized Image
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
