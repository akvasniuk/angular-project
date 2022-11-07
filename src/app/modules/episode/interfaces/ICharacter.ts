interface ILocation{
 name: string
}

interface IOrigin{
  name: string
}


export interface ICharacter{
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  image: string,
  location: ILocation,
  origin: IOrigin
}
