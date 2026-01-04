export type BlinkoNotePayload = {
  title: string;
  content: string;
  tags?: string[];
};

type TrpcMutation<TInput = unknown, TResult = unknown> = {
  mutate: (input: TInput) => Promise<TResult>;
};

declare global {
  interface BlinkoI18n {
    t: (key: string, params?: Record<string, unknown>) => string;
    addResourceBundle: (
      language: string,
      namespace: string,
      resources: Record<string, unknown>,
      deep?: boolean,
      overwrite?: boolean
    ) => void;
  }

  interface BlinkoToast {
    success: (message: string) => void;
    error: (message: string) => void;
    info: (message: string) => void;
  }

  interface BlinkoDialogHandle {
    close?: () => void;
  }

  interface BlinkoShowDialogOptions {
    title: string;
    content: () => HTMLElement;
    width?: number;
  }

  interface BlinkoToolbarIconOptions {
    name: string;
    icon: string;
    placement?: string;
    tooltip?: string;
    onClick?: () => void;
    content?: () => HTMLElement;
  }

  interface BlinkoNoteApi {
    createNote?: TrpcMutation<BlinkoNotePayload>;
    create?: TrpcMutation<BlinkoNotePayload>;
  }

  interface BlinkoApi {
    note?: BlinkoNoteApi;
    [namespace: string]: unknown;
  }

  interface BlinkoNotesShortcut {
    create?: (payload: BlinkoNotePayload) => Promise<unknown>;
  }

  interface BlinkoWindow {
    i18n: BlinkoI18n;
    toast: BlinkoToast;
    api: BlinkoApi;
    notes?: BlinkoNotesShortcut;
    showDialog: (options: BlinkoShowDialogOptions) => BlinkoDialogHandle | void;
    closeDialog: () => void;
    addToolBarIcon: (options: BlinkoToolbarIconOptions) => void;
    removeToolBarIcon?: (name: string) => void;
  }

  interface Window {
    Blinko: BlinkoWindow;
  }
}

export {};
