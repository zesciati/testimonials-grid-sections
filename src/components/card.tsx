// import ImageDaniel from "../assets/image-daniel.jpg";
import Testimonials from "../data/testimonials.json";

function card() {
  return (
    <div className="space-y-4 sm:grid sm:auto-cols-fr sm:gap-4  lg:auto-rows-auto lg:[grid-template-areas:'box-1_box-1_box-2_box-5''box-3_box-4_box-4_box-5'] ">
      {Testimonials.map((testimonial) => (
        <div className={`${testimonial.bgColor} space-y-4 rounded-lg p-8 ${testimonial.textColor} shadow-2xl lg:[grid-area:${testimonial.gridArea}] `} >
          <div className="flex gap-6">
            <img
              src={testimonial.image}
              alt="foto daniel"
              className="size-12 rounded-full border-2 border-purple-300"
            />
            <div>
              <p>{testimonial.name}</p>
              <p>{testimonial.position}</p>
            </div>
          </div>
          <div className="text-2xl font-semibold">
            {testimonial.title}
          </div>
          <div>
            "{testimonial.desc}"
          </div>
        </div>
      ))}
    </div>
    
  );
}

export default card;
