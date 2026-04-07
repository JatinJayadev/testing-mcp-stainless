// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { TestingMcpOpenAPI } from '../client';

export abstract class APIResource {
  protected _client: TestingMcpOpenAPI;

  constructor(client: TestingMcpOpenAPI) {
    this._client = client;
  }
}
