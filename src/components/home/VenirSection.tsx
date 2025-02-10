const VenirSection = () => {
  return (
    <section id="venir" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-12">Comment venir</h2>
      <p className=" mb-16">On vous recommande de louer une voiture ou d'anticiper vos déplacements sur place car Óbidos n'est pas desservie par les transports en commun. Un site de covoiturage est à votre dispo tout plus bas!</p>

      <div className="flex flex-col md:flex-row gap-16">

        <div className="w-full max-w-1/3">
          <img src="/assets/images/carte.jpg" alt="Carte de Portugal" className="w-full rounded-md border border-gray-200" />
        </div>

        <div className="flex-grow">
          <div className="space-y-16 text-base leading-[1.61] font-light">

            <div>
              <h3 className="text-lg font-semibold mb-8">De Paris à Lisbonne</h3>
              <ul className="list-disc pl-6">
                <li><strong className="font-semibold">En avion</strong> : Vous trouverez des vols directs Paris-Lisbonne (environ 2h15)</li>
                <li><strong className="line-through">En train</strong> : Maheureusement erreur 404 chez SNCF et Trainline...</li>
                <li><strong className="font-semibold">En car</strong> : Si, si c'est possible faire en Flixibus ! C'est environ 24 heures de trajet, mais vous arrivez directement à Lisbonne et vous gagnez le bonus écologique !</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-8">De Lisbonne à Ourém</h3>
              <ul className="list-disc pl-6">
                <li><strong className="font-semibold">Louer une voiture</strong> : Location possible à l'aéroport (environ une heure). Attention certaines agences ne sont pas directes! Surveillez votre adresse mail.</li>
                <li><strong className="font-semibold">Covoiturage</strong> : Pour les habitués et les proactifs en covoiturage, c'est par là : https://covoiture.viagloria.com/mariage</li>
                <li><strong className="font-semibold">En car</strong> : Un car vous amènera de Lisbonne (gare d'Orient) jusqu'à Fatima (en route..), de route d'Óbidos. Plus, une voiture devra vous rester chercher là. Liste à voir en bas!</li>
                <li><strong className="font-semibold">En taxi</strong> : environ 120€ pour un taxi à plein</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-8">Se déplacer à Ourém</h3>
              <p className="">Le lieu du mariage est à 10 minutes de Talefe, et entre 10 et 30 minutes des logements que nous vous recommandons. Il y aura aussi des covoiturages prévus pour les trajets à Óbidos. Le soir du mariage une navette desservira tous les logements que nous vous recommandons en tout plus bas!</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default VenirSection