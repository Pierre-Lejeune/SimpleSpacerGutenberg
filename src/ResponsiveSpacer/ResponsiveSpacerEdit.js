import { useBlockProps} from '@wordpress/block-editor'; // Récupération de la méthode permettant à Wordpress de nous transmettre les attributs propres à notre bloc

import "./ResponsiveSpacer.scss";

const ResponsiveSpacerEdit = () => { //La fonction affichant notre premier bloc sur l'interface d'administration
	const blockProps = useBlockProps() // Récupération des attributs propres à notre bloc
	return ( 
        <div {...blockProps}>
            <div className={"bloc-customises-responsive-spacer-container"}>
				<div 
					className={"bloc-customises-responsive-spacer-mobile"} 
					aria-hidden="true" 
					style={{
						height: "50px",
					}}
				/>
				<div 
					className={"bloc-customises-responsive-spacer-desktop"} 
					aria-hidden="true" 
					style={{
						height: "100px",
					}}
				/>
			</div>
        </div>
	); //Affichage de notre bloc
}
export default ResponsiveSpacerEdit;
