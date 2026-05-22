// import ImageDaniel from "../assets/image-daniel.jpg";
import Testimonials from "../data/testimonials.json";

function card() {
  return (
    <div className="space-y-5">
      {Testimonials.map((testimonial) => (
        <div className={`${testimonial.bgColor} space-y-4 rounded-lg p-8 ${testimonial.textColor}`}>
          <div className="flex gap-6">
            <img
              src={testimonial.image}
              alt="foto daniel"
              className="size-12 rounded-full border-2 border-purple-300"
            />
            <div>
              <p>{testimonial.name}</p>
              <p>{testimonial.position}Verified Graduate</p>
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
