import Head from "next/head";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { APP_NAME } from "../constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content="An Airbnb clone built with Next.js" />
      </Head>

      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">{APP_NAME}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            image="/assets/placeholder.jpg"
            title="Cozy Apartment"
            description="A nice place to stay with modern amenities."
          />
          <Card
            image="/assets/placeholder.jpg"
            title="Luxury Villa"
            description="Spacious villa with a private pool."
          />
          <Card
            image="/assets/placeholder.jpg"
            title="Downtown Studio"
            description="Perfect location for city life."
          />
        </div>

        <div className="flex justify-center mt-10">
          <Button
            label="Explore More"
            onClick={() => alert("Feature coming soon!")}
            variant="primary"
          />
        </div>
      </main>
    </>
  );
}
