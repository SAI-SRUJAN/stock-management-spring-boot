import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'deepCompare' })
export class ComparePipe implements PipeTransform {
  transform(obj: any, original: any = {}): any {
    if (Array.isArray(obj) || Array.isArray(original) || !this.isObject(obj) || !this.isObject(original)) {
      return {};
    }

    return this.getKeysOfObject(obj, original).reduce((diff: any, key: any) => {
      if (!this.isdeepCompareable(original[key], obj[key])) {
        diff[key] = obj[key];
      }

      return diff;
    }, {});
  }

  isObject(value: any) {
    return value !== null && typeof value === 'object';
  }
  getKeysOfObject(obj: any, other: any): any {
    return [...Object.keys(obj), ...Object.keys(other)].filter((key, index, array) => array.indexOf(key) === index);
  }
  isdeepCompareable(obj: any, other: any): any {
    if (!this.isObject(obj) || !this.isObject(other)) {
      return obj === other;
    }

    return this.getKeysOfObject(obj, other).every(
      (key: any): boolean => {
        if (!this.isObject(obj[key]) && !this.isObject(other[key])) {
          return obj[key] === other[key];
        }
        if (!this.isObject(obj[key]) || !this.isObject(other[key])) {
          return false;
        }

        return this.isdeepCompareable(obj[key], other[key]);
      }
    );
  }
}
