import Vue from 'vue';

export abstract class Constants {
  static readonly ACCESS_TOKEN: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJncm91cCI6ImFkbWluIiwiaWQiOiI2MjgwZGRkMDFhYTcyZTU3NDFjMGQxZTIiLCJvcmdhbmlzYXRpb24iOiJQb3JzY2hlIiwicGVybWlzc2lvbnMiOltdLCJ1c2VybmFtZSI6IlRVX1BvcnNjaGUiLCJpYXQiOjE2NTI2MTM1ODZ9.0jZ8hw5VX2EeQKIei1IxS_R-u8sZSPkmtZixeoHQ3lE';
}

export const EventBus = new Vue();
