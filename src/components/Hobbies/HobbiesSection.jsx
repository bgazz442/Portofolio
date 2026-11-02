import React, { useState } from 'react';
import SectionHeading from '../UI/SectionHeading';
import HobbyCard from './HobbyCard';
import ContentCreationModal from './ContentCreationModal';
import PhotographyModal from './PhotographyModal';
import { personalData } from '../../data/portfolioData';

export default function HobbiesSection({ onOpenHobbyDetail, onModalStateChange }) {
  const [contentModalOpen, setContentModalOpen] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);

  const contentCreationHobby = personalData.hobbies.find(h => h.id === 'content-creation');
  const photographyHobby = personalData.hobbies.find(h => h.id === 'photography');

  const handleOpenContentModal = () => {
    setContentModalOpen(true);
    if (onModalStateChange) onModalStateChange(true);
  };

  const handleCloseContentModal = () => {
    setContentModalOpen(false);
    if (onModalStateChange) onModalStateChange(false);
  };

  const handleOpenPhotoModal = () => {
    setPhotoModalOpen(true);
    if (onModalStateChange) onModalStateChange(true);
  };

  const handleClosePhotoModal = () => {
    setPhotoModalOpen(false);
    if (onModalStateChange) onModalStateChange(false);
  };

  const handleHobbyClick = (hobby) => {
    if (hobby.actionType === 'page') {
      if (onOpenHobbyDetail) {
        onOpenHobbyDetail(hobby);
      }
    } else if (hobby.id === 'content-creation') {
      handleOpenContentModal();
    } else if (hobby.id === 'photography') {
      handleOpenPhotoModal();
    } else if (hobby.id === 'music') {
      window.open(hobby.link || "https://youtu.be/mjO1yZyi6bM?si=TCu7sYVDb0edY8eN", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="hobbies" className="section-padding relative">
      {/* Subtle Background Glow */}
      <div 
        className="ambient-glow-circle w-80 h-80 bg-indigo-500/10 -top-20 left-10" 
        aria-hidden="true" 
      />

      <div className="portfolio-container relative z-10">
        <SectionHeading 
          badge="Interests &amp; Balance"
          title="Beyond The Terminal"
          subtitle="Aktivitas dan ketertarikan yang mengasah kreativitas, ketelitian analisis, dan menjaga keseimbangan produktivitas harian. Klik kartu untuk eksplorasi lebih dalam."
        />

        {/* Responsive Grid of Hobby Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalData.hobbies.map((hobby) => (
            <HobbyCard 
              key={hobby.id} 
              hobby={hobby} 
              onCardClick={handleHobbyClick}
            />
          ))}
        </div>
      </div>

      {/* Content Creation Modal */}
      <ContentCreationModal 
        isOpen={contentModalOpen} 
        onClose={handleCloseContentModal} 
        hobby={contentCreationHobby}
      />

      {/* Photography Lightbox Modal */}
      <PhotographyModal 
        isOpen={photoModalOpen} 
        onClose={handleClosePhotoModal} 
        photos={photographyHobby?.photos}
      />
    </section>
  );
}
