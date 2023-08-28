import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

const NotificationsForm = () => {
	return (
		<div>
			<p className="text-sm text-muted-foreground mb-4">
				Notify me through...
			</p>
			<RadioGroup defaultValue="comfortable">
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="default" id="r1" />
					<Label htmlFor="r1">Email and Messages</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="comfortable" id="r2" />
					<Label htmlFor="r2">Messages Only</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="compact" id="r3" />
					<Label htmlFor="r3">Email Only</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="compact" id="r3" />
					<Label htmlFor="r3">Nothing</Label>
				</div>
			</RadioGroup>

			<h3 className="mb-4 text-lg font-medium mt-12">
				Email Notifications
			</h3>
			<div className="flex flex-row items-center justify-between rounded-lg border p-4 my-3">
				<div className="space-y-0.5 px-2">
					<Label className="text-base">Communication emails</Label>
					<p className="text-sm text-muted-foreground">
						Receive emails about your account activity.
					</p>
				</div>
				<Switch
				// checked={field.value}
				// onCheckedChange={field.onChange}
				/>
			</div>
			<div className="flex flex-row items-center justify-between rounded-lg border p-4 my-3">
				<div className="space-y-0.5 px-2">
					<Label className="text-base">Marketing Emails</Label>
					<p className="text-sm text-muted-foreground">
						Receive emails about new products, features, and more.
					</p>
				</div>
				<Switch
				// checked={field.value}
				// onCheckedChange={field.onChange}
				/>
			</div>
			<div className="flex flex-row items-center justify-between rounded-lg border p-4 my-3">
				<div className="space-y-0.5 px-2">
					<Label className="text-base">Security Emails</Label>
					<p className="text-sm text-muted-foreground">
						Receive emails about your account activity and security.
					</p>
				</div>
				<Switch
				// checked={field.value}
				// onCheckedChange={field.onChange}
				/>
			</div>
			<Button type="submit" className="my-4">
				Update notifications
			</Button>
		</div>
	);
};

export default NotificationsForm;
