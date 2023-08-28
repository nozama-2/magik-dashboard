import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

const ProfileForm = () => {
	return (
		<div>
			<div>
				<h3 className="mb-4 text-lg font-medium mt-12">Username</h3>
				<Input type="username" placeholder="Sophia Applewood" />
				<p className="text-sm text-muted-foreground mt-2">
					This is your account name.
				</p>
			</div>
			<div>
				<h3 className="mb-4 text-lg font-medium mt-12">Email</h3>
				<Input type="email" placeholder="Email" />
				<p className="text-sm text-muted-foreground mt-2">
					This is your email address that we will send notifications
					to.
				</p>
			</div>
			<div className="flex flex-row items-center justify-between rounded-lg border p-4 my-6">
				<div className="space-y-0.5 pr-2">
					<Label className="text-base">Are you a teacher?</Label>
					<p className="text-sm text-muted-foreground">
						This will affect the appearance and features of your
						dashboard.
					</p>
				</div>
				<Switch
				// checked={field.value}
				// onCheckedChange={field.onChange}
				/>
			</div>
			<Button type="submit" className="my-4">
				Update profile
			</Button>
		</div>
	);
};

export default ProfileForm;
