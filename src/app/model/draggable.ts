import { Propertie } from './propertie';
import { Values } from './values';

export class Draggable {
  type: string;
  name: string;
  dataset: string;
  properties: Propertie[] = new Array();
  values: Values[] = new Array();
  visibility = 'always';


  clone(): Draggable {
    const clone = new Draggable();
    clone.type = this.type;
    clone.name = this.name +  'clone';
    clone.dataset = this.dataset;

    clone.properties = new Array();

    for (let _i = 0; _i < this.properties.length; _i++) {
      const prop = this.properties[_i];
      const np = new Propertie();
      np.key = prop.key;
      np.value = prop.value;
      clone.properties.push(np);
    }

    clone.values = new Array();

    for (let _i = 0; _i < this.values.length; _i++) {
      const value = this.values[_i];
      const nv = new Values();
      nv.key = value.key;
      for (let _j = 0; _j < value.values.length; _j++) {
        nv.values.push(value.values[_j]);
      }
      clone.values.push(nv);
    }

    return clone;
  }

}
