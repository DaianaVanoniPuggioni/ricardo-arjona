export const Video = () => {
  return (
    <section className="text-white mt-20">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/HUm9IrQZ8_o?si=0Vz0tUANUm1Z6kfz"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
};
