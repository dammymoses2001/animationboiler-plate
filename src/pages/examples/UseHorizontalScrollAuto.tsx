import { Link } from "react-router-dom";
import HorizontalScrollGalleryAuto from "../../components/HorizontalScrollGalleryAuto";

export default function UseHorizontalScrollAuto() {
  const images = [
    { id: 1, color: "#FF6B6B", title: "Image 1" },
    { id: 2, color: "#4ECDC4", title: "Image 2" },
    { id: 3, color: "#45B7D1", title: "Image 3" },
    { id: 4, color: "#FFA07A", title: "Image 4" },
    { id: 5, color: "#98D8C8", title: "Image 5" },
    { id: 6, color: "#F7DC6F", title: "Image 6" },
  ];

  return (
    <div style={{ backgroundColor: "#0f0f0f", color: "white" }}>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "4rem 2rem",
        }}
      >
        <Link
          to="/"
          className="absolute top-8 left-8 text-white no-underline py-2 px-4 rounded-lg bg-white/10 transition-colors duration-300 hover:bg-white/20"
        >
          ← Back to Home
        </Link>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Horizontal Scroll (Auto Height)
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
            maxWidth: "600px",
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          Height is calculated from content — no guessing container height
        </p>
        <div className="mt-12 text-3xl animate-bounce [animation-duration:2s]">↓</div>
      </section>

      <HorizontalScrollGalleryAuto itemCount={images.length}>
        {(activeIndex) =>
          images.map((image, index) => (
            <div
              key={image.id}
              className="min-w-[80vw] h-[70vh] rounded-[20px] flex flex-col items-center justify-center text-4xl font-bold shadow-[0_10px_40px_rgba(0,0,0,0.3)] relative overflow-hidden transition-transform duration-300 ease-out hover:scale-[1.02]"
              style={{ backgroundColor: image.color }}
            >
              <div
                className={`text-6xl font-bold transition-all duration-700 ease-out ${
                  index === activeIndex ? "delay-200" : "delay-0"
                } ${
                  index <= activeIndex
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-90"
                }`}
              >
                {image.title}
              </div>
              <div
                className={`text-xl font-normal mt-4 transition-all duration-700 ease-out ${
                  index === activeIndex ? "delay-400" : "delay-0"
                } ${
                  index <= activeIndex
                    ? "opacity-80 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                Scroll to explore
              </div>
              <div
                className={`absolute w-[300px] h-[300px] rounded-full bg-white/10 -top-[150px] -right-[150px] transition-all duration-1000 ease-out ${
                  index === activeIndex ? "delay-300" : "delay-0"
                } ${
                  index <= activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
              <div
                className={`absolute bottom-12 left-1/2 -translate-x-1/2 h-1 bg-white/50 rounded-sm transition-[width] duration-700 ease-out ${
                  index === activeIndex ? "delay-500" : "delay-0"
                }`}
                style={{ width: index <= activeIndex ? "60%" : "0%" }}
              />
            </div>
          ))
        }
      </HorizontalScrollGalleryAuto>

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          padding: "4rem 2rem",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          You've Reached the End!
        </h2>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
            maxWidth: "600px",
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          Normal vertical scrolling continues from here
        </p>
      </section>

    </div>
  );
}
