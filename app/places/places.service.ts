
import { PlacesModel } from './places.model'

export class PlacesService {
  private places: PlacesModel[] = [
    {
      id: 1,
    title: 'UJI Campus',
    image: '~/assets/uji.png'
    },
    {
      id: 2,
      title: 'El-Grao Beach',
      image: '~/assets/grao.png'

    },
    {
      id: 3,
      title: 'Castellon City center',
      image: '~/assets/citycenter.png'

    },
    {
      id: 4,
      title: 'Castellon Parks',
      image: '~/assets/parsks.png'

    },
   
  ]

  static getInstance(): PlacesService {
    return PlacesService._instance
  }

  private static _instance: PlacesService = new PlacesService()

  getPlaces(): PlacesModel[] {
    return this.places
  }

  getPlaceById(id: number): PlacesModel | undefined {
    return this.places.find((places) => places.id === id) || undefined
  }
}