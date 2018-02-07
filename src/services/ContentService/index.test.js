import ContentService from './';
import { sets } from '../../config/contentSettings';

const contentService = new ContentService();

describe('ContentService', () => {
  it('should successfully perform AJAX requests', () => {
    const response = contentService.getAllSets();
    return response.then(res => {
      expect(typeof res).toBe('object');
    });
  });

  it('should fetch all sets', () => {
    const response = contentService.getAllSets();
    return response.then(res => {
      expect(res.hasOwnProperty('objects')).toBe(true);
      expect(res.objects.length).toBeGreaterThan(0);
    });
  });

  it('should fetch the "home" set', () => {
    const response = contentService.getSet(sets.home);
    return response.then(res => {
      expect(res.hasOwnProperty('title')).toBe(true);
      expect(res.title.toLowerCase()).toBe('home');
    });
  });
});
