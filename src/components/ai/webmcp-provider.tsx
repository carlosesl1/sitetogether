"use client";

import { useEffect } from "react";

type JsonSchema = {
  type: "object";
  properties?: Record<string, unknown>;
  required?: string[];
};

type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: JsonSchema;
  execute: (input: Record<string, unknown>) => unknown | Promise<unknown>;
  annotations?: {
    readOnlyHint: boolean;
    untrustedContentHint: boolean;
  };
};

type WebMcpModelContext = {
  registerTool: (
    tool: WebMcpTool,
    options?: { signal?: AbortSignal },
  ) => void | Promise<void>;
};

declare global {
  interface Document {
    readonly modelContext?: WebMcpModelContext;
  }
}

const destinations = {
  home: "/",
  contact: "/contato",
  dpo_service: "/servicos/dpo-as-a-service",
  lgpd_consulting: "/servicos/consultoria-adequacao",
  privacy_training: "/servicos/mentoria-e-cultura",
  eca_digital: "/eca-digital",
  blog: "/blog",
} as const;

const serviceCatalog = {
  company: "TOGETHER Privacy & Tech",
  services: [
    {
      name: "DPO as a Service",
      purpose: "Operação contínua de privacidade como extensão do time da empresa.",
      url: destinations.dpo_service,
    },
    {
      name: "Consultoria de Adequação à LGPD",
      purpose: "Diagnóstico, plano de adequação e implementação assistida.",
      url: destinations.lgpd_consulting,
    },
    {
      name: "Mentoria e Cultura",
      purpose: "Treinamentos, workshops e formação de Privacy Champions.",
      url: destinations.privacy_training,
    },
    {
      name: "Diagnóstico ECA Digital",
      purpose: "Orientação sobre novas obrigações de proteção infantojuvenil.",
      url: destinations.eca_digital,
    },
  ],
  contactUrl: destinations.contact,
};

const tools: WebMcpTool[] = [
  {
    name: "list_privacy_services",
    description:
      "Lista os serviços de privacidade, LGPD, DPO e ECA Digital oferecidos pela TOGETHER, com objetivo e página oficial.",
    inputSchema: { type: "object" },
    annotations: {
      readOnlyHint: true,
      untrustedContentHint: false,
    },
    execute: () => JSON.stringify(serviceCatalog),
  },
  {
    name: "open_together_destination",
    description:
      "Abre uma página oficial da TOGETHER para continuar uma jornada de serviço, conteúdo ou contato.",
    inputSchema: {
      type: "object",
      properties: {
        destination: {
          type: "string",
          enum: Object.keys(destinations),
          description: "Destino oficial a abrir no site da TOGETHER.",
        },
      },
      required: ["destination"],
    },
    annotations: {
      readOnlyHint: false,
      untrustedContentHint: false,
    },
    execute: ({ destination }) => {
      if (
        typeof destination !== "string" ||
        !(destination in destinations)
      ) {
        throw new Error("Destino inválido para o site da TOGETHER.");
      }

      const href = destinations[destination as keyof typeof destinations];
      window.location.assign(href);
      return `Abrindo ${href}`;
    },
  },
];

export function WebMcpProvider() {
  useEffect(() => {
    const modelContext = document.modelContext;
    if (!modelContext?.registerTool) return;

    const controller = new AbortController();

    tools.forEach((tool) => {
      try {
        void Promise.resolve(
          modelContext.registerTool(tool, { signal: controller.signal }),
        ).catch(() => {
          // Experimental browsers may reject registration without an origin trial.
        });
      } catch {
        // Browsers without an active WebMCP implementation keep the human UI unchanged.
      }
    });

    return () => {
      controller.abort();
    };
  }, []);

  return null;
}
