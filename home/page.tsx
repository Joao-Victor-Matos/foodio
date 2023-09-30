import Container from "@/components/Container";
import Image from "@/node_modules/next/image";

const HomePage = () => {
  return (
    <Container>
      <div className="flex items-center justify-center">
        <div>
          <h1 className="text-4xl text-fontcolor">
            Find all meal type that you want using Foods.io !
          </h1>
          <blockquote>
            Use our powerful search system to find information about the meal
            that you need.
          </blockquote>
        </div>
        <Image
          src="/foodhero.png"
          alt="Food"
          width={700}
          height={0}
          className="object-contain"
        />
      </div>
    </Container>
  );
};

export default HomePage;
