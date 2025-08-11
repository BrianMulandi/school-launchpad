import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import labImg from "@/assets/gallery-lab.jpg";
import sportsImg from "@/assets/gallery-sports.jpg";
import classImg from "@/assets/gallery-classroom.jpg";
import libraryImg from "@/assets/gallery-library.jpg";
import artsImg from "@/assets/gallery-arts.jpg";

const ShowcaseGallerySection = () => {
  const images = [
    { src: classImg, alt: "Smart classroom with interactive boards at Mulandi's High International in Kenya" },
    { src: labImg, alt: "Modern science laboratory with students conducting experiments" },
    { src: sportsImg, alt: "Premium sports complex with football pitch and running track" },
    { src: libraryImg, alt: "Light-filled school library with students reading" },
    { src: artsImg, alt: "Music and arts studio with instruments and easels" },
  ];

  return (
    <section className="py-20 bg-gradient-subtle" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Campus Showcase</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A glimpse of our world-class facilities and vibrant learning environment in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, i) => (
            <Card key={i} className="overflow-hidden border-0 shadow-card group">
              <CardContent className="p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseGallerySection;
