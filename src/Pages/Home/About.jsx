const About = () => {
  return (
    // <section className="bg-gray-400 py-16">
    //   <div className="container mx-auto text-center">
    //     <img
    //       className="w-40 h-40 block mx-auto"
    //       src="https://i.ibb.co/3CyZYTr/about.png"
    //       alt="about Us"
    //     />
    //     <p className="text-gray-950 mt-4 mb-6">
    //       Welcome to [<b>Social Event Management</b>], where we bring dreams to
    //       life and create unforgettable memories. We are passionate social event
    //       organizers specializing in a wide range of events, including weddings,
    //       birthday parties, anniversaries, engagement parties, retirement
    //       parties, baby showers, and more.
    //     </p>
    //     <p className="text-gray-950 mb-6">
    //       At [<b>Social Event Management</b>], we understand the importance of
    //       celebrating life is special moments. Our dedicated team of event
    //       planners is committed to curating exceptional events that reflect your
    //       unique style, personality, and vision. Whether it is an elegant
    //       wedding celebration, a fun-filled birthday party, a romantic
    //       anniversary extravaganza, or any other event, we ensure every detail
    //       is meticulously planned and executed to perfection.
    //     </p>
    //     <p className="text-gray-950 mb-6">
    //       With years of experience in the event industry, we have built a
    //       reputation for excellence. Our approach is based on collaboration,
    //       creativity, and attention to detail. We work closely with you to
    //       understand your preferences and aspirations, turning them into a
    //       reality that exceeds your expectations. Our goal is to design and
    //       execute events that leave a lasting impression on you and your guests,
    //       making each moment truly special.
    //     </p>
    //     <p className="text-gray-950">
    //       Contact [<b>Social Event Management</b>] today, and lets start
    //       planning your next remarkable event. Together, we will create
    //       unforgettable memories that you and your guests will cherish forever.
    //     </p>
    //   </div>
    // </section>
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="bg-gray-400 py-16"
    >
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="lg:max-w-md">
              <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                <span className="text-sm text-gray-700 uppercase dark:text-gray-400">
                  Who we are?
                </span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  About Us
                </h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-gray-950 dark:text-gray-400">
                Welcome to [<b>Social Event Management</b>], where we bring
                dreams to life and create unforgettable memories. We are
                passionate social event organizers specializing in a wide range
                of events, including weddings, birthday parties, anniversaries,
                engagement parties, retirement parties, baby showers, and more.
              </p>
              {/* ... Rest of the content ... */}
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg"
              alt=""
              className="relative z-40 object-cover w-full h-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
