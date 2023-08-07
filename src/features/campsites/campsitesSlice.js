import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectRandomCampsite = () => {
    const randomIdx = Math.floor(Math.random() * CAMPSITES.length);
    return CAMPSITES[randomIdx];
}