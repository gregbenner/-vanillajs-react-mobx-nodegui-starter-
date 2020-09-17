import { observable, action, computed } from "mobx";

class TrackStore {
  titles = ["one", "two", "three", "four", "five"];

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  @observable titleIndex = 0;

  @action.bound
  setTitleIndex() {
    return (this.titleIndex = this.randomNumber(0, 4));
  }

  @computed
  get title() {
    return this.titles[this.titleIndex];
  }
}

const trackStore = new TrackStore();

export default trackStore;
export { TrackStore };
