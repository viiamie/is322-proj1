import { SuggestionsCard } from "./SuggestionsCard";
import getSuggestions from "@/pages/suggestions";
import styles from "./suggestions.module.css";

export const SuggestionsBox = ({ weatherData }) => {
    const clothingCards = getSuggestions(weatherData);
    return (
        <div className={styles.boxwrapper}>
            {clothingCards.map((card, index) => (
            <SuggestionsCard key={index} card={card} />
            ))}
        </div>
    );
};