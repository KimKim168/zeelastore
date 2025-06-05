import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlayIcon, Search } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-[50vh] max-w-screen-2xl px-2 xl:px-20 mx-auto mt-5 mb-5">
      <div className="flex flex-wrap gap-2 items-end justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Resources</h2>
        <form className="flex w-full lg:w-auto min-w-[400px] max-w-full">
          <input
            type="text"
            placeholder="Search ..."
            className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 rounded-l-none rounded-r-md hover:bg-primary/90"
          >
            <Search size={18} />
          </button>
        </form>
      </div>

      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Card key={i} className="shadow-none overflow-hidden rounded-md border-[1px]">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted w-full border-b" />
            </CardHeader>
            <CardContent className="pb-6 flex flex-col justify-between items-start">
              <div>
                <h3 className="text-xl font-bold tracking-tight line-clamp-3">
                  A beginner&apos;s guide to blackchain for engineers
                </h3>
                {/* <p className="mt-2 text-muted-foreground line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p> */}
              </div>

              <Button variant='outline' className="mt-6 shadow-none border-primary text-primary">
                <PlayIcon /> Watch Video
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
