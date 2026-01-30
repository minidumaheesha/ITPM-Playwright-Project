import { test, expect } from '@playwright/test';

const URL = 'https://www.swifttranslator.com/';
const INPUT = '[placeholder="Input Your Singlish Text Here."]';
const OUTPUT = page =>
  page.locator('text=Sinhala').locator('..').locator('div').nth(1);

/* ---------------- POSITIVE FUNCTIONAL TEST CASES ---------------- */

test('Pos_Fun_0001: Simple daily usage sentence', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('');
  await page.locator(INPUT).pressSequentially('mama gedhara innee', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('මම ගෙදර ඉන්නේ');
});

test('Pos_Fun_0002: Compound sentence', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially(
    'api kaeema kanna yanavaa saha passe film ekak balanavaa',
    { delay: 50 }
  );
  await expect(OUTPUT(page)).toContainText('අපි කෑම කන්න යනවා');
});

test('Pos_Fun_0003: Complex conditional sentence', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('oyaa enne nam mama balan innavaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ඔයා එන්නේ නම්');
});

test('Pos_Fun_0004: Interrogative question', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('oyaata hariyata therenavaadha?', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ඔයාට');
});

test('Pos_Fun_0005: Imperative command', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('vahaama enna', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('වහාම එන්න');
});

test('Pos_Fun_0006: Negative sentence', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('mata eeka karanna bae', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('බැහැ');
});

test('Pos_Fun_0007: Greeting phrase', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('suba udhaasanak', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('සුබ');
});

test('Pos_Fun_0008: Polite request', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('karunaakara eeka poddak balanna', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('කරුණාකර');
});

test('Pos_Fun_0009: Informal phrasing', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('ehema karapan', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('කරපන්');
});

test('Pos_Fun_0010: Repeated word emphasis', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('tika tika vaeda karanna', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ටික');
});

test('Pos_Fun_0011: Past tense', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('mama iiyee gedhara giyaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ගියා');
});

test('Pos_Fun_0012: Future tense', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('api heta yamu', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('හෙට');
});

test('Pos_Fun_0013: Pronoun variation plural', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('oyaalaa enne kavadhdha', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ඔයාලා');
});

test('Pos_Fun_0014: Joined word handled correctly', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('mamagedharayanavaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ගෙදර');
});

test('Pos_Fun_0015: Mixed Singlish + English', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially(
    'mama office eka late venavaa traffic nisaa',
    { delay: 50 }
  );
  await expect(OUTPUT(page)).toContainText('office');
});

test('Pos_Fun_0016: Brand name', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('Zoom meeting ekak thiyenavaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('Zoom');
});

test('Pos_Fun_0017: Abbreviation', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('mata OTP eka evanna', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('OTP');
});

test('Pos_Fun_0018: Punctuation handling', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('eeka hari da?', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('?');
});

test('Pos_Fun_0019: Currency format', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('mata Rs. 500 gewanna thiyenavaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('Rs.');
});

test('Pos_Fun_0020: Time format', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('class eka 8.30 AM patan gannavaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('8.30 AM');
});

test('Pos_Fun_0021: Measurement unit', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('sugar gram 500 oonee', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('500');
});

test('Pos_Fun_0022: Multiple spaces', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('mama   gedhara   yanavaa', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('ගෙදර');
});

test('Pos_Fun_0023: Multi-line input', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially(
    'mama gedhara yanavaa\no yaa enne da',
    { delay: 50 }
  );
  await expect(OUTPUT(page)).toContainText('ගෙදර');
});

test('Pos_Fun_0024: Slang phrase', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).pressSequentially('ela machan supiri', { delay: 50 });
  await expect(OUTPUT(page)).toContainText('මචන්');
});

/* ---------------- NEW NEGATIVE FUNCTIONAL TEST CASES ---------------- */

test('Neg_Fun_0001: Input with only whitespace', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('     ');
  await expect(OUTPUT(page)).toBeEmpty();
});

test('Neg_Fun_0002: Input with only numbers', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('123456789');
  await expect(OUTPUT(page)).not.toContainText('සිංහල');
});

test('Neg_Fun_0003: Input with only special characters', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('@@@###$$$');
  await expect(OUTPUT(page)).toBeEmpty();
});

test('Neg_Fun_0004: Very short meaningless input', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('aa');
  await expect(OUTPUT(page)).not.toContainText('අ');
});

test('Neg_Fun_0005: Random mixed characters', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('ab12@#cd');
  await expect(OUTPUT(page)).not.toContainText('සිංහල');
});

test('Neg_Fun_0006: Unsupported language input (Tamil)', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('வணக்கம்');
  await expect(OUTPUT(page)).not.toContainText('වණ');
});

test('Neg_Fun_0007: Input with excessive repeated characters', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('aaaaaaa');
  await expect(OUTPUT(page)).not.toContainText('අ');
});

test('Neg_Fun_0008: HTML tags entered as input', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('<script>alert(1)</script>');
  await expect(OUTPUT(page)).not.toContainText('alert');
});

test('Neg_Fun_0009: Input exceeding normal sentence length', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('mama gedhara yanavaa '.repeat(30));
  await expect(OUTPUT(page)).not.toContainText('දෝෂ');
});

test('Neg_Fun_0010: Mixed uppercase and lowercase Singlish', async ({ page }) => {
  await page.goto(URL);
  await page.locator(INPUT).fill('MaMa GeDhArA YaNaVaA');
  await expect(OUTPUT(page)).not.toContainText('ගෙදර යනවා');
});

/* ---------------- NEW UI-RELATED TEST CASE ---------------- */

test('Pos_UI_0001: Clearing input field clears Sinhala output', async ({ page }) => {
  await page.goto(URL);

  const inputField = page.locator(INPUT);

  // Type valid Singlish text
  await inputField.fill('mama gedhara yanavaa');
  await expect(OUTPUT(page)).toContainText('ගෙදර');

  // Clear input
  await inputField.fill('');

  // Output should also clear
  await expect(OUTPUT(page)).toBeEmpty();
});