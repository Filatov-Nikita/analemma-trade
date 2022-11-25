import ky from "ky";
import * as Tokens from "./tokens";

export default class ServiceApi {
  constructor(domain, opts) {
    this.lang = "ru";
    this.domain = domain;
    this.opts = opts;
    this.handleRejectionToken = () => {};
    this.mainKy = this.createMain();
    this.swot = this.createSWOT();
  }

  createMain() {
    return ky.create({
      prefixUrl: `${this.domain}/${this.opts.apiPath}`,
      timeout: this.opts.timeout,
      hooks: {
        beforeRequest: [
          (request) => {
            if (this.lang) request.headers.set("Accept-Language", this.lang);
          },
        ],
      },
    });
  }

  createSWOT() {
    return this.mainKy.extend({
      hooks: {
        beforeRequest: [
          async (request, options) => {
            const token = Tokens.getAccessToken();
            if(!token) return;
            if(request.method === 'GET') {
              const url = new URL(request.url);
              url.searchParams.append('token', token);
              return this.copyReq(request, url);
            }

            let body;
            try {
              body = await request.formData();
            } catch(e) {
              body = new FormData();
            }
            body.append('token', token);
            request.headers.delete('Content-Type');
            return this.copyReq(request, request.url, { body });
          }
        ],
        afterResponse: [
          async (request, options, response) => {
            if (response.status === 401) return this.handleRejectionToken();
          },
        ],
      },
    });
  }

  setTokenToReq(request, accessToken) {
    request.headers.set("Authorization", "Bearer " + accessToken);
  }

  registrHandleRejectionToken(handler) {
    this.handleRejectionToken = handler;
  }

  setLang(langName) {
    this.lang = langName;
  }

  copyReq(request, url, opts = {}) {
    return new Request(url, {
      credentials: request.credentials,
      integrity: request.integrity,keepalive: request.keepalive,
      mode: request.mode,
      redirect: request.redirect, referrer: request.referrer,
      referrerPolicy: request.referrerPolicy,
      requestMode: request.requestMode,
      requestCredentials: request.requestCredentials,
      signal: request.signal, cache: request.cache,
      body: opts.body, method: request.method,
      ...opts
    })
  }
}
