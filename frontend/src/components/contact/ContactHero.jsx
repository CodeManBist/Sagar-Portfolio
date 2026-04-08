import { TextGradient } from '../ui'

const ContactHero = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
        Let&apos;s build something that grows{" "}
        <TextGradient variant="teal-amber" as="span">
          your business.
        </TextGradient>
      </h1>

      <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
        I usually respond within 24 hours. Whether you have a specific project in mind or just want to explore possibilities, I&apos;m here to help.
      </p>
    </div>
  );
};

export default ContactHero;
