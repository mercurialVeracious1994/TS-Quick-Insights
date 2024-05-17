type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};
// ---cut---
type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;
//   ^?

const featureOptions: FeatureOptions = {
    darkMode: true,
    newUserProfile: true
}

const features: Features = {
    darkMode: ()=>{},
    newUserProfile: ()=>{}
}
console.log(featureOptions, "featureOptions");
console.log(features.darkMode, features.newUserProfile, "features");