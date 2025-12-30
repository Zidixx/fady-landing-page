"use client";

import Image from "next/image";

interface ProTestimonialCardProps {
  name: string;
  title: string;
  location: string;
  text: string;
  avatar?: string;
  stats?: {
    clients: number;
    experience: string;
  };
}

export default function ProTestimonialCard({ name, title, location, text, avatar, stats }: ProTestimonialCardProps) {
  return (
    <div className="glass-card p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5" style={{
      border: 'none',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
    }} onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.2)';
    }} onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
    }}>
      <div className="flex items-start mb-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg overflow-hidden relative" style={{
          background: avatar ? 'transparent' : 'linear-gradient(to bottom right, #A01ED9, #7B1AB6, #5B1899)',
          border: '2px solid rgba(61, 15, 102, 0.2)',
        }}>
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              width={64}
              height={64}
              className="rounded-full object-cover"
              style={{
                objectPosition: 'center',
              }}
            />
          ) : (
            <span className="text-white font-bold text-xl">
              {name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-bold text-black-soft text-lg">{name}</h4>
            <span className="px-3 py-1 glass-bubble text-xs font-medium rounded-full" style={{color: '#5B1899', border: '1px solid rgba(160, 30, 217, 0.3)'}}>
              Vérifié
            </span>
          </div>
          <p className="font-medium text-sm mb-1" style={{color: '#7B1AB6'}}>{title}</p>
          <p className="text-gray-text text-sm">{location}</p>
        </div>
      </div>
      {stats && (
        <div className="flex items-center space-x-6 mb-4 pb-4" style={{borderBottom: '1px solid rgba(200, 130, 255, 0.2)'}}>
          <div>
            <p className="text-2xl font-bold" style={{color: '#7B1AB6'}}>{stats.clients}+</p>
            <p className="text-xs text-gray-text">Clients</p>
          </div>
          <div>
            <p className="text-2xl font-bold" style={{color: '#7B1AB6'}}>{stats.experience}</p>
            <p className="text-xs text-gray-text">d&apos;expérience</p>
          </div>
        </div>
      )}
      <p className="text-gray-text leading-relaxed">&quot;{text}&quot;</p>
    </div>
  );
}

