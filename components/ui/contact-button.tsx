import React from "react";

type ContactButtonProps = {
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export const ContactButton = ({ icon, href, onClick }: ContactButtonProps) => {
  const content = (
    <div className="flex items-center gap-2 px-4 py-4 bg-sky-500 text-white rounded-full
                    transform transition-transform duration-200 hover:scale-110 cursor-pointer">
      {icon}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
};