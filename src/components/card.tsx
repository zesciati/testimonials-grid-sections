import ImageDaniel from "../assets/image-daniel.jpg";

function card() {
  return (
    <div>
      <div className="bg-purple-500 space-y-4 rounded-lg p-8  text-white">
        <div className="flex gap-6">
          <img src={ImageDaniel} alt="foto daniel" className="size-12 rounded-full border-2 border-purple-300"/>
          <div>
            <p>Daniel Clifford</p>
            <p>Verified Graduate</p>
          </div>
        </div>
        <div className="text-2xl font-semibold">
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got ever penny's worth.
        </div>
        <div>
          "I was an EMT for many years before I joined the bootcamp. rve been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incrediblyfun! I enrolled shortly thereafter The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I've successfully switched careers, working as
          a Software Engineer at a VR startup."
        </div>
      </div>
    </div>
  );
}

export default card;
