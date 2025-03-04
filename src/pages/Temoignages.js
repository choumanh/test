function Temoignages() {
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Ce que disent mes consultant·es</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div>
              <img src="https://exemple.com/temoignage-lucie.jpg" alt="Lucie" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-xl mb-4 text-center">
                "Consulter Marc a été un déclic. Grâce à son écoute et la justesse de son tirage, j'ai pu prendre conscience de ce qui me freinait et trouver le courage de réaliser mon projet."
              </p>
            </div>
            <p className="font-bold text-center">Lucie, 28 ans</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div>
              <img src="https://exemple.com/temoignage-julien.jpg" alt="Julien" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-xl mb-4 text-center">
                "Les ateliers de Marc sont passionnants. On en ressort avec une nouvelle perspective sur le tarot et soi-même. Une belle expérience de partage et de découverte."
              </p>
            </div>
            <p className="font-bold text-center">Julien, 35 ans</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div>
              <img src="https://exemple.com/temoignage-sophie.jpg" alt="Sophie" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-xl mb-4 text-center">
                "Les consultations avec Marc sont toujours riches et bienveillantes. Son approche du tarot apporte un éclairage précieux sur les situations que je traverse. Je recommande !"
              </p>
            </div>
            <p className="font-bold text-center">Sophie, 42 ans</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Temoignages;