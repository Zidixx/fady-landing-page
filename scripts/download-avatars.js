const https = require('https');
const fs = require('fs');
const path = require('path');

// Liste des témoignages avec leurs caractéristiques
const testimonials = [
  { name: 'Sophie Martin', gender: 'women', seed: 'sophie-martin' },
  { name: 'Thomas Dubois', gender: 'men', seed: 'thomas-dubois' },
  { name: 'Emma Leroy', gender: 'women', seed: 'emma-leroy' },
  { name: 'Lucas Moreau', gender: 'men', seed: 'lucas-moreau' },
  { name: 'Camille Bernard', gender: 'women', seed: 'camille-bernard' },
  { name: 'Alexandre Petit', gender: 'men', seed: 'alexandre-petit' },
];

// Service d'avatars réalistes (RandomUser.me avec seeds personnalisés)
const downloadAvatar = (testimonial, index) => {
  return new Promise((resolve, reject) => {
    // Utilisation de UI Faces ou un service similaire pour des avatars réalistes
    // Alternative: utiliser https://randomuser.me/api/portraits/ avec des seeds
    const url = `https://randomuser.me/api/portraits/${testimonial.gender}/${index + 1}.jpg`;
    const filename = `avatar-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    const filepath = path.join(__dirname, '..', 'public', 'avatars', filename);

    // Créer le dossier avatars s'il n'existe pas
    const avatarsDir = path.join(__dirname, '..', 'public', 'avatars');
    if (!fs.existsSync(avatarsDir)) {
      fs.mkdirSync(avatarsDir, { recursive: true });
    }

    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Téléchargé: ${filename}`);
          resolve({ name: testimonial.name, path: `/avatars/${filename}` });
        });
      } else {
        // Fallback vers un autre service
        file.close();
        fs.unlinkSync(filepath);
        console.log(`⚠️  Échec pour ${testimonial.name}, utilisation d'un placeholder`);
        // Utiliser un service alternatif
        const fallbackUrl = `https://i.pravatar.cc/300?img=${index + 10}`;
        const fallbackFile = fs.createWriteStream(filepath);
        https.get(fallbackUrl, (fallbackResponse) => {
          fallbackResponse.pipe(fallbackFile);
          fallbackFile.on('finish', () => {
            fallbackFile.close();
            console.log(`✅ Téléchargé (fallback): ${filename}`);
            resolve({ name: testimonial.name, path: `/avatars/${filename}` });
          });
        }).on('error', reject);
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      // Fallback
      const fallbackUrl = `https://i.pravatar.cc/300?img=${index + 10}`;
      const fallbackFile = fs.createWriteStream(filepath);
      https.get(fallbackUrl, (fallbackResponse) => {
        fallbackResponse.pipe(fallbackFile);
        fallbackFile.on('finish', () => {
          fallbackFile.close();
          console.log(`✅ Téléchargé (fallback): ${filename}`);
          resolve({ name: testimonial.name, path: `/avatars/${filename}` });
        });
      }).on('error', reject);
    });
  });
};

// Télécharger tous les avatars
(async () => {
  console.log('📥 Téléchargement des avatars...\n');
  try {
    const results = await Promise.all(
      testimonials.map((testimonial, index) => downloadAvatar(testimonial, index))
    );
    console.log('\n✅ Tous les avatars ont été téléchargés avec succès!');
    console.log('\nRésultats:');
    results.forEach(result => {
      console.log(`  - ${result.name}: ${result.path}`);
    });
  } catch (error) {
    console.error('❌ Erreur lors du téléchargement:', error);
  }
})();

