import Header from "@/components/reuseable/header";
const Tips = () => {
  return (
    <div>
      <Header bgImg="/tips.png" text="" button="" title="Travel Tips" />
      <main>
        <div className="flex justify-between items-center w-360 mx-auto my-20">
          <div>
            <p className="text-6xl w-140 font-semibold">
              Maintaining your{" "}
              <span className="font-semibold text-[#FFA500]">privacy </span>{" "}
              during travels.{" "}
            </p>
          </div>
          <div className="w-150">
            <p className=" leading-10">
              Molestie aliquam sit lacus, sem vulputate sed magnis eu. Non nec
              at lobortis enim, feugiat fermentum lobortis gravida in. Tellus
              tincidunt amet, egestas sit. Feugiat faucibus eu magna dolor,
              turpis dignissim. Facilisis purus nibh vitae arcu. In tellus in
              amet nulla. Rutrum orci purus neque blandit cursus volutpat nisl
              morbi egestas. Adipiscing porta quis turpis ut nulla morbi. Varius
              id tempor, ipsum leo. vivamus rhoncus, augue risus. Ornare posuere
              scelerisque a at. Ut nunc neque at commodo nulla egestas eros.
              Ullamcorper a eu nulla diam nec pulvinar sit dui nec. Mauris sed
              vestibulum vitae massa. Ac morbi ut velit ac suscipit id.
              Venenatis scelerisque ut nam ultrices tortor integer. Odio
              ullamcorper rutrum read more{" "}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tips;
