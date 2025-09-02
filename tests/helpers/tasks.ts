import { Page } from '@playwright/test';

export const taskCreate = async (page: Page, tarea: string) => {
  await page.getByRole('button', { username: 'Nueva tarea' }).click();
  await page.getByLabel('Nombre de la tarea').fill(tarea);
  await page.getByRole('button', { username: 'crear' }).click();
};

export const TaskEdit = async (page: Page, tareaEditada: string) => {
  await page.getByRole('button', { username: 'Editar' }).first().click();
  await page.getByLabel('Nombre de la tarea').fill(tareaEditada);
  await page.getByRole('button', { username: 'actualizar' }).click();
};

export const TaskDone = async (page: Page) => {
  page.once('dialog', (dialog) => {
    dialog.accept();
  });
  await page
    .getByRole('button', { username: /Marcar/ })
    .first()
    .click();
};

export const TaskDelete = async (page: Page) => {
  page.once('dialog', (dialog) => {
    dialog.accept();
  });
  await page
    .getByRole('button', { username: 'Eliminar' })
    .first()
    .click();
};
